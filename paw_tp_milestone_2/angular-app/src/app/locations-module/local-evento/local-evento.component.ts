import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { local } from 'src/app/models/local';
import { RestLocaisService } from 'src/app/services/Locais/rest-locais.service';
import { DialogEditLocalComponent } from '../dialog-edit-local/dialog-edit-local.component';

@Component({
  selector: 'app-local-evento',
  templateUrl: './local-evento.component.html',
  styleUrls: ['./local-evento.component.css']
})
export class LocalEventoComponent implements OnInit {
  locais: local[] = [];
  fileToUpload:any={};
  fileName = '';
  message = '';
  constructor(private restLocal: RestLocaisService, public dialog: MatDialog) { }

  ngOnInit(): void {
    if(localStorage.getItem("role")==="promotor"){
      this.restLocal.showLocaisDoPromotor(localStorage.getItem('username')!).subscribe((resLocais) => {
        this.locais = resLocais;
      }, (error) => {
        alert("Não foi possivel carregar os locais");
      });
    }
    else if(localStorage.getItem("role")==="admin"){
      this.restLocal.mostrarLocais().subscribe((resLocais) => {
        this.locais = resLocais;
      }, (error) => {
        alert("Não foi possivel carregar os locais");
      });
    }
  }

  deleteLocal(id: String) {
    this.restLocal.eliminarLocal(id).subscribe(res => {
      alert("Local removido com sucesso");
      setTimeout(() => location.reload(), 500);
    }, ((erro) => {
      alert("Ocorreu um erro ao remover o local");
    }));
  }

  editLocal(loc: local): void {
    const dialogRef = this.dialog.open(DialogEditLocalComponent, {
      width: '500px', height: 'auto'
      , data: loc
    });

  dialogRef.afterClosed().subscribe(result => {
    if (localStorage.getItem("operacao")==='validForm') {
          this.restLocal.editarLocal(result._id,result).subscribe((res)=>{
            alert("Local atualizado com sucesso");
            localStorage.removeItem("operation");
            setTimeout(()=>location.reload(),500);
          },((error)=>{
            localStorage.removeItem("operation");
            alert("Erro na atualização dos dados.");
          }));
      }
      else if(localStorage.getItem("operation")==='invalidForm') {
        alert("Os dados do formulário são inválidos.")
        localStorage.removeItem("operation");
        location.reload();
      }
      else{
        localStorage.removeItem("operation");
      }
  });
}

  onFileSelected(event:any,id:String) {
    const file: File = event.target.files[0];
    if (file) {
      this.fileName = file.name;
      this.restLocal.uploadFile(file,id).subscribe((result:any) => {
        setTimeout(()=>location.reload(),500);
        alert("Imagem do local Atualizada!")
        this.fileName = '';
        this.message = '';
      });
    }
  }

}

