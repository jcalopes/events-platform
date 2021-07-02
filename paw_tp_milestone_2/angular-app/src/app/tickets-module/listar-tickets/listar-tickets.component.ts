import { Component, OnInit } from '@angular/core';
import { bilhete } from 'src/app/models/bilhete';
import { RestBilheteService } from 'src/app/services/Bilhetes/rest-bilhete-service.service';

@Component({
  selector: 'app-listar-tickets',
  templateUrl: './listar-tickets.component.html',
  styleUrls: ['./listar-tickets.component.css']
})
export class ListarTicketsComponent implements OnInit {
  tickets:bilhete[]=[];
  constructor(private restTickets:RestBilheteService) { }
  
  ngOnInit(): void {
    this.restTickets.showBilhetesUtilizador(localStorage.getItem('username')!)
    .subscribe((tickets:bilhete[])=>{
      if(tickets.length>0){
        this.tickets=tickets;
      }
    },(error)=>{
        alert("Não foi possivel aceder às suas compras.")
    });
  }
  }


