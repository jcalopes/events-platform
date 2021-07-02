import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { bilhete } from 'src/app/models/bilhete';
import { evento } from 'src/app/models/evento';
import { RestBilheteService } from 'src/app/services/Bilhetes/rest-bilhete-service.service';
import { RestEventoService } from 'src/app/services/Eventos/rest-evento.service';
import { DialogBuyTicketComponent } from '../dialog-buy-ticket/dialog-buy-ticket.component';

@Component({
  selector: 'app-mostrar-evento',
  templateUrl: './mostrar-evento.component.html',
  styleUrls: ['./mostrar-evento.component.css']
})
export class MostrarEventoComponent implements OnInit { 
  event:any={
    id:{},
    local:{},
    nome:{},
    dataInicio:{},
    dataFim:{},
    preco:{},
    categoria:{}
}

  ticket:bilhete=new bilhete("",localStorage.getItem("username")!,this.event,false,false,new Date(Date.now()),new Date(Date.now()));
  currentEvent!:evento;
  role!:String;
  constructor(private route:ActivatedRoute,private restEvento:RestEventoService,private restTicket:RestBilheteService,
    public dialog: MatDialog) { 
    }

  ngOnInit(): void {
    this.restEvento.mostrarEvento(this.route.snapshot.params['id']).subscribe((doc)=>{
      doc.dataInicio=doc.dataInicio.substring(0,10);
      doc.dataFim=doc.dataFim.substring(0,10);
      this.currentEvent=doc;
    },(error)=>{
      alert("Erro no carregamento do evento");
    });
    this.role=localStorage.getItem("role")!;
  }

  buyTicket(eve: evento) {
    const dialogRef = this.dialog.open(DialogBuyTicketComponent, {
      width: '500px', height: 'auto',data:eve
    });

    dialogRef.afterClosed().subscribe(result => {
      if(localStorage.getItem('operation')==='confirm'){
        this.event.id=this.currentEvent._id;
        this.event.local=this.currentEvent.local;
        this.event.nome=this.currentEvent.nome;
        this.event.dataInicio=new Date(this.currentEvent.dataInicio);
        this.event.dataFim=new Date(this.currentEvent.dataFim);
        this.event.promotor=this.currentEvent.promotor;
        this.event.preco=this.currentEvent.preco;
        this.event.categoria=this.currentEvent.categoria;
       this.ticket.evento=this.event;
       this.restTicket.criarBilhete(this.ticket).subscribe((res) => {
         alert("Reserva Efetuada");
         localStorage.removeItem("cancel");
         setTimeout(() => location.reload(), 500);
       }, ((error) => {
         localStorage.removeItem("cancel");
         alert("Evento Esgotado");
       }));
      }
    });
  }
  
}
