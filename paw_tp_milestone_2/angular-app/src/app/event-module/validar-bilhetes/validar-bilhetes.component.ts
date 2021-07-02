import { Component, OnInit } from '@angular/core';
import { bilhete } from 'src/app/models/bilhete';
import { RestBilheteService } from 'src/app/services/Bilhetes/rest-bilhete-service.service';

@Component({
  selector: 'app-validar-bilhetes',
  templateUrl: './validar-bilhetes.component.html',
  styleUrls: ['./validar-bilhetes.component.css']
})
export class ValidarBilhetesComponent implements OnInit {
  tickets:bilhete[]=[];
  constructor(private restBilhetes:RestBilheteService) { }

  ngOnInit(): void {
    if(localStorage.getItem("role")==="promotor"){
      this.restBilhetes.showBilhetesPromotor(localStorage.getItem("username")!).subscribe((tickets)=>{
        tickets.forEach((t)=>{
          if(!t.validado && !t.cancelado && new Date(t.evento.dataInicio)>new Date(Date.now())){
            this.tickets.push(t);
          }
        });
      });
    }
    else if(localStorage.getItem("role")==="admin"){
      this.restBilhetes.showAllBilhetes().subscribe((tickets)=>{
        console.log(tickets);
        tickets.forEach((t)=>{
          if(!t.validado && !t.cancelado && new Date(t.evento.dataInicio)>new Date(Date.now())){
            this.tickets.push(t);
          }
        });
      });
    }
  }

  validar(ticket:bilhete){
    ticket.validado=true;
    this.restBilhetes.updateBilhete(ticket._id,ticket).subscribe((ticket)=>{
      alert("Bilhete Validado");
      setTimeout(()=>location.reload(),500);
    },((error)=>{
      alert("Não foi possivel proceder à validação");
    }));
  }
}
