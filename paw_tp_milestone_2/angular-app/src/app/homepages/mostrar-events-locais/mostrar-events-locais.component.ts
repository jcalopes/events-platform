import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { evento } from 'src/app/models/evento';
import { local } from 'src/app/models/local';
import { RestEventoService } from 'src/app/services/Eventos/rest-evento.service';

@Component({
  selector: 'app-mostrar-events-locais',
  templateUrl: './mostrar-events-locais.component.html',
  styleUrls: ['./mostrar-events-locais.component.css']
})
export class MostrarEventsLocaisComponent implements OnChanges {
  @Input() 
  loc:local;

  dataSource:evento[]=[];
  constructor(private restEvento:RestEventoService) {
    this.loc=new local("","","",0,0,"","","","");
   }

  ngOnChanges(changes: SimpleChanges): void {
    if(this.loc.nome != ""){
      this.restEvento.showEventosLocal(this.loc.nome).subscribe((eventos)=>{
        eventos.forEach((ev)=>{
          ev.dataInicio=ev.dataInicio.substring(0,10);
          ev.dataFim=ev.dataFim.substring(0,10);
        });

        this.dataSource=eventos;
        console.log("eventos",eventos);
      },(error)=>{
        alert("Erro no carregamento dos eventos do local");
      })
    }
  };

  displayedColumns: string[] = ['nome', 'descricao', 'dataInicio', 'dataFim'];

}
