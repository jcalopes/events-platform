import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { evento } from 'src/app/models/evento';
import { RestEventoService } from 'src/app/services/Eventos/rest-evento.service';

@Component({
  selector: 'app-mostrar-destaques',
  templateUrl: './mostrar-destaques.component.html',
  styleUrls: ['./mostrar-destaques.component.css']
})
export class MostrarDestaquesComponent implements OnInit {
  eventos:evento[]=[];
  constructor(private restEventos:RestEventoService,private router:Router) { }

  ngOnInit(): void {
    this.restEventos.mostrarEventos().subscribe((topEvents)=>{
      topEvents.forEach((ev)=>{
        if(new Date(ev.dataFim)>new Date(Date.now()) && ev.destaque==true && ev.visivel==true){
          ev.dataInicio=ev.dataInicio.substring(0,10);
          ev.dataFim=ev.dataFim.substring(0,10);
          this.eventos.push(ev);
        }
    });
    });
  }

  mostrarDetalhes(id:String){
    this.router.navigate(['evento/'+id]);
  }

}
