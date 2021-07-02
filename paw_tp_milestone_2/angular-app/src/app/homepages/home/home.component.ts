import { Component, OnInit } from '@angular/core';
import { RestEventoService } from '../../services/Eventos/rest-evento.service';
import { Router } from '@angular/router';

const endpoint = 'http://localhost:3000/api/v1/';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
 
  eventos: any = [];
  constructor(private restEventos: RestEventoService, private router: Router) { }

  ngOnInit(): void {
    this.mostrarEventos();
  }

  mostrarEventos() {
    this.restEventos.mostrarEventos().subscribe((res) => {
      res.forEach((ev)=>{
        if(new Date(ev.dataFim)>=new Date(Date.now())&& ev.visivel){
          ev.dataInicio=ev.dataInicio.substring(0,10);
          ev.dataFim=ev.dataFim.substring(0,10);
          this.eventos.push(ev);
        }
    });
  })
}

mostrarEvento(id:String){
  this.router.navigate(['evento/'+id]);
}
}