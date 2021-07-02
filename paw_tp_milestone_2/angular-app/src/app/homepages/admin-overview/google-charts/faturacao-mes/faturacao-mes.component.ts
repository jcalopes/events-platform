import { Component, OnInit } from '@angular/core';
import { ChartType } from 'angular-google-charts';
import { RestEventoService } from 'src/app/services/Eventos/rest-evento.service';

@Component({
  selector: 'app-faturacao-mes',
  templateUrl: './faturacao-mes.component.html',
  styleUrls: ['./faturacao-mes.component.css']
})
export class FaturacaoMesComponent implements OnInit {
  title!: string;
  type!: ChartType;
  data:any=[["Janeiro",0],["Fevereiro",0],["Março",0],["Abril",0],["Maio",0],
  ["Junho",0],["Julho",0],["Agosto",0],["Setembro",0],["Outubro",0],["Novembro",0],["Dezembro",0]]
  columnNames!: string[];
  public options!: {};
  width!: number;
  height!: number;
  months:any[]=["Meses","Janeiro","Fevereiro","Março","Abril","Maio",
  "Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"]
  
  constructor(private restEventos:RestEventoService) { }

  ngOnInit(): void {
    this.title = '';
    this.type = ChartType.Line;
    this.restEventos.showFaturaMes().subscribe((docs)=>{
      docs.forEach((ev)=>{
        let currentRow=[];
        currentRow.push(this.months[ev._id]);
        currentRow.push(ev.count);
        this.data[ev._id-1]=currentRow;
        console.log(this.data);
      });
      });
   
    this.columnNames = ["Meses do Ano 2021","Faturação Mensal (euros)"];
    this.options = {
    };
    this.width = 1100;
  }

}
