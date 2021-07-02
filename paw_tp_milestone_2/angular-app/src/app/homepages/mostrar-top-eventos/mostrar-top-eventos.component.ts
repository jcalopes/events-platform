import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RestEventoService } from 'src/app/services/Eventos/rest-evento.service';

@Component({
  selector: 'app-mostrar-top-eventos',
  templateUrl: './mostrar-top-eventos.component.html',
  styleUrls: ['./mostrar-top-eventos.component.css']
})
export class MostrarTopEventosComponent implements OnInit {
  eventos:any[]=[];
  constructor(private restEventos:RestEventoService,private router:Router) { }

  ngOnInit(): void {
    this.restEventos.showTopEventos().subscribe((topEvents)=>{
      topEvents.forEach((ev)=>{
        ev.dataInicio=ev.dataInicio.substring(0,10);
        ev.dataInicio=ev.dataInicio.substring(0,10);
        if(new Date(ev.dataFim)>new Date(Date.now())){
          this.eventos.push(ev);
        }
    });
    });
  }
  mostrarDetalhes(id:String){
  this.router.navigate(['evento/'+id]);
  }
}
