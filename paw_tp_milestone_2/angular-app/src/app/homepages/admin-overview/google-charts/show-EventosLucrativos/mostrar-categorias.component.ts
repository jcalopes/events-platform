import { Component, OnInit } from '@angular/core';
import { ChartType } from 'angular-google-charts';
import { RestEventoService } from 'src/app/services/Eventos/rest-evento.service';

@Component({
  selector: 'app-mostrar-categorias',
  templateUrl: './mostrar-categorias.component.html',
  styleUrls: ['./mostrar-categorias.component.css']
})
export class MostrarCategoriasComponent implements OnInit {
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
    this.type = ChartType.PieChart;
    this.restEventos.showEventosLucrativos().subscribe((docs)=>{
      docs.forEach((ev)=>{
        let currentRow=[];
        currentRow.push(ev.nome);
        currentRow.push(ev.count);
        this.data.push(currentRow);
      });
      });
   
    this.columnNames = ["Evento", "Total Faturado"];
    this.options = {
      "title": "Eventos Mais Lucrativos"
    };
    this.width = 350;
  }

}
