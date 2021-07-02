import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { evento } from 'src/app/models/evento';
import { local } from 'src/app/models/local';
import { RestEventoService } from 'src/app/services/Eventos/rest-evento.service';
import { RestLocaisService } from 'src/app/services/Locais/rest-locais.service';
import { DialogEditEventComponent } from '../dialog-edit-event/dialog-edit-event.component';

@Component({
  selector: 'app-eventos-ativados',
  templateUrl: './eventos-ativados.component.html',
  styleUrls: ['./eventos-ativados.component.css']
})
export class EventosAtivadosComponent implements OnInit {
  events: evento[] = [];
  fileToUpload:any={};
  data:any={eve:{},
        loc:[]};

  fileName = '';
  message = '';
  constructor(private restEvento: RestEventoService, private restLocal:RestLocaisService,public dialog: MatDialog) { }

  ngOnInit(): void {
    if(localStorage.getItem("role")==='promotor'){
      this.restEvento.showEventosPromotor(localStorage.getItem("username")!)
      .subscribe((eventos) => {
        eventos.forEach((ev) => {
          if (new Date(ev.dataFim) >= new Date(Date.now())) {
            ev.dataInicio=ev.dataInicio.substring(0,10);
            ev.dataFim=ev.dataFim.substring(0,10);
            this.events.push(ev);
          }
        });
      }, (error) => {
        alert("Erro no carregamento de eventos.");
      });

      this.restLocal.showLocaisDoPromotor(localStorage.getItem("username")!).subscribe((locais)=>{
        this.data.loc=locais;
      },(error)=>{
        alert("Não foi possivel carregar os locais")
      });
    }
    else if(localStorage.getItem("role")==='admin'){
      this.restEvento.mostrarEventos()
      .subscribe((eventos) => {
        eventos.forEach((ev) => {
          if (new Date(ev.dataFim) >= new Date(Date.now())) {
            ev.dataInicio=ev.dataInicio.substring(0,10);
            ev.dataFim=ev.dataFim.substring(0,10);
            this.events.push(ev);
          }
        });
      }, (error) => {
        alert("Erro no carregamento de eventos.");
      });

      this.restLocal.mostrarLocais().subscribe((locais)=>{
        this.data.loc=locais;
      },(error)=>{
        alert("Não foi possivel carregar os locais")
      });
    }
  }

  deleteEvento(id: String) {
    this.restEvento.deleteEvento(id).subscribe((res) => {
      alert("Evento removido com sucesso!");
      setTimeout(() => location.reload(), 500);
    }, ((error) => {
      alert("Não foi possivel remover o evento");
    }));
  }

  editEvento(eve: evento) {
    this.data.eve=eve;
    const dialogRef = this.dialog.open(DialogEditEventComponent, {
      width: '500px', height: 'auto',data:this.data
    });

    dialogRef.afterClosed().subscribe(result => {
      if (localStorage.getItem("operation") == 'validForm') {
        this.restEvento.editarEvento(result.eve._id, result.eve).subscribe((res) => {
          alert("Evento atualizado com sucesso");
          localStorage.removeItem("cancel");
          setTimeout(() => location.reload(), 500);
        }, ((error) => {
          localStorage.removeItem("cancel");
          alert("Erro na atualização dos dados.");
        }));
      }
      else if (localStorage.getItem("operation") == 'invalidForm') {
        alert("Os dados do formulário são inválidos.");
        localStorage.removeItem("cancel");
        location.reload();
      }
      else {
        localStorage.removeItem("cancel");
      }
    });
  }

  onFileSelected(event:any,id:String) {
    const file: File = event.target.files[0];
    if (file) {
      this.fileName = file.name;
      this.restEvento.uploadFile(file,id).subscribe((result:any) => {
        setTimeout(()=>location.reload(),500);
        alert("Poster Atualizado!")
        this.fileName = '';
        this.message = '';
      });
    }
  }

}
