import { Component, OnInit } from '@angular/core';
import { evento } from 'src/app/models/evento';
import { RestEventoService } from 'src/app/services/Eventos/rest-evento.service';

@Component({
  selector: 'app-listar-eventos-promotor',
  templateUrl: './listar-eventos-promotor.component.html',
  styleUrls: ['./listar-eventos-promotor.component.css']
})
export class ListarEventosPromotorComponent implements OnInit {
  events:evento[]=[];
  constructor(private restEvento:RestEventoService) { }

  ngOnInit(): void {
    if(localStorage.getItem("role")==='promotor'){
    this.restEvento.showEventosPromotor(localStorage.getItem("username")!)
    .subscribe((eventos)=>{
      eventos.forEach((ev)=>{
          if(new Date(ev.dataFim)<new Date(Date.now())){
            this.events.push(ev);
          }
      });
    },(error)=>{
      alert("Erro no carregamento de eventos.");
    });
  }
else{
  if(localStorage.getItem("role")==='admin'){
    this.restEvento.mostrarEventos()
    .subscribe((eventos)=>{
      eventos.forEach((ev)=>{
          if(new Date(ev.dataFim)<new Date(Date.now())){
            this.events.push(ev);
          }
      });
    },(error)=>{
      alert("Erro no carregamento de eventos.");
    });
  }
}
}
}
