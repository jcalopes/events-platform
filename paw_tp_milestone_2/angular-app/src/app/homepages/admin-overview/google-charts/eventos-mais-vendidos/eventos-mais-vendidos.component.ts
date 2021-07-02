import { Component, OnInit } from '@angular/core';
import { ChartType } from 'angular-google-charts';
import { RestEventoService } from 'src/app/services/Eventos/rest-evento.service';

@Component({
  selector: 'app-eventos-mais-vendidos',
  templateUrl: './eventos-mais-vendidos.component.html',
  styleUrls: ['./eventos-mais-vendidos.component.css']
})
export class EventosMaisVendidosComponent implements OnInit {
  title!: string;
  type!: ChartType;
  data:any[]=[];
  columnNames!: string[];
  public options!: {};
  width!: number;
  height!: number;

  constructor(private restEventos:RestEventoService) { }

  ngOnInit(): void {
    this.title = '';
    this.type = ChartType.Table;
    this.restEventos.showTopEventos().subscribe((docs)=>{
      docs.forEach((ev)=>{
        let currentRow=[];
        currentRow.push(ev.nome);
        currentRow.push(ev.count);
        this.data.push(currentRow);
      });
      });
   
    this.columnNames = ["Evento", "Total Bilhetes Vendidos"];
    this.options = {
    alternatingRowStyle:true,
      showRowNumber:true,  
    };
    this.width = 350;
  }

}
