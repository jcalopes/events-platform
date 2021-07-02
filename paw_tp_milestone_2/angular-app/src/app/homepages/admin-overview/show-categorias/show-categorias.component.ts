import { Component, OnInit } from '@angular/core';
import { ChartType } from 'angular-google-charts';
import { RestEventoService } from 'src/app/services/Eventos/rest-evento.service';

@Component({
  selector: 'app-show-categorias',
  templateUrl: './show-categorias.component.html',
  styleUrls: ['./show-categorias.component.css']
})
export class ShowCategoriasComponent implements OnInit {
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
    this.type = ChartType.Bar;
    this.restEventos.showEventosPorCategoria().subscribe((docs)=>{
      docs.forEach((ev)=>{
        let currentRow=[];
        currentRow.push(ev.categoria);
        currentRow.push(ev.count);
        this.data.push(currentRow);
      });
      });
   
    this.columnNames = ["Categorias", "Total Bilhetes"];
    this.options = {
      "title": "Bilhetes Vendidos por Categoria"
    };
    this.width = 350;
  }

}
