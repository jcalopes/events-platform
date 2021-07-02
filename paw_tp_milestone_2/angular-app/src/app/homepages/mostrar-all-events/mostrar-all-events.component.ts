import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { bilhete } from 'src/app/models/bilhete';
import { evento } from 'src/app/models/evento';
import { RestBilheteService } from 'src/app/services/Bilhetes/rest-bilhete-service.service';
import { RestEventoService } from 'src/app/services/Eventos/rest-evento.service';
import { DialogBuyTicketComponent } from '../dialog-buy-ticket/dialog-buy-ticket.component';

@Component({
  selector: 'app-mostrar-all-events',
  templateUrl: './mostrar-all-events.component.html',
  styleUrls: ['./mostrar-all-events.component.css']
})
export class MostrarAllEventsComponent implements OnInit {
  events:evento[]=[];
  role!:String;
  myControl = new FormControl();
  options: any[] = [];
  selected:String="";
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
  
constructor( private restTicket:RestBilheteService,public dialog: MatDialog,private restEvento:RestEventoService,private router:Router) { }

  ngOnInit(): void {
    this.restEvento.mostrarEventos().subscribe((docs)=>{
      docs.forEach((ev)=>{
        if(new Date(ev.dataFim)>new Date(Date.now()) && ev.visivel){
          ev.dataInicio=ev.dataInicio.substring(0,10);
          ev.dataFim=ev.dataFim.substring(0,10);
          this.events.push(ev);
          this.options.push({id:ev._id,nome:ev.nome});
        }
      })
  })
  this.role=localStorage.getItem("role")!;
}

buyTicket(eve:evento){
  const dialogRef = this.dialog.open(DialogBuyTicketComponent, {
    width: '500px', height: 'auto',data:eve
  });

  dialogRef.afterClosed().subscribe(result => {
    if(localStorage.getItem('operation')==='confirm'){
      this.event.id=eve._id;
      this.event.local=eve.local;
      this.event.nome=eve.nome;
      this.event.dataInicio=new Date(eve.dataInicio);
      this.event.dataFim=new Date(eve.dataFim);
      this.event.promotor=eve.promotor;
      this.event.preco=eve.preco;
      this.event.categoria=eve.categoria;
     this.ticket.evento=this.event;
     this.restTicket.criarBilhete(this.ticket).subscribe((res) => {
       alert("Reserva Efetuada");
       localStorage.removeItem("cancel");
       setTimeout(() => location.reload(), 500);
     }, ((error) => {
       localStorage.removeItem("cancel");
       alert("Erro no checkout da reserva.");
     }));
    }
  });
}

verDetalhe(){
  if(this.selected!=""){
    this.router.navigate(['evento/'+this.selected]);
  }
}

updateSelected(id:String){
  this.selected=id;
}

}