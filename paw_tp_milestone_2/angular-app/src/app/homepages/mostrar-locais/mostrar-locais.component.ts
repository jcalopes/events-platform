import { Component, OnInit } from '@angular/core';
import { local } from 'src/app/models/local';
import { RestEventoService } from 'src/app/services/Eventos/rest-evento.service';
import { RestLocaisService } from 'src/app/services/Locais/rest-locais.service';

@Component({
  selector: 'app-mostrar-locais',
  templateUrl: './mostrar-locais.component.html',
  styleUrls: ['./mostrar-locais.component.css']
})
export class MostrarLocaisComponent implements OnInit {
  locais:local[]=[];
  selectedLocal:local;
  constructor(private restLocais:RestLocaisService,private restEvento:RestEventoService) { 
    this.selectedLocal=new local("","","",0,0,"","","","")
  }

  ngOnInit(): void {
    this.restLocais.mostrarLocais().subscribe((locais:local[])=>{
      this.locais=locais;
    },(error)=>{
      alert("Não foi possível aceder aos seus locais!");
    });
  }

  selectLocal(l:local){
    this.selectedLocal=l;
    window.scrollTo(0,0);
  }
}
