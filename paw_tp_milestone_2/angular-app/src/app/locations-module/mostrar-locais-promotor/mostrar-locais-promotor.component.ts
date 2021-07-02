import { Component, OnInit } from '@angular/core';
import { FormBuilder} from '@angular/forms';
import { local } from 'src/app/models/local';
import { RestLocaisService } from 'src/app/services/Locais/rest-locais.service';

@Component({
  selector: 'app-mostrar-locais-promotor',
  templateUrl: './mostrar-locais-promotor.component.html',
  styleUrls: ['./mostrar-locais-promotor.component.css']
})
export class MostrarLocaisPromotorComponent implements OnInit {
  locais:local[]=[];

  constructor(private restLocais:RestLocaisService,private _formBuilder:FormBuilder) {

   }

  ngOnInit(): void {
    if(localStorage.getItem("role")==="promotor"){
      this.restLocais.showLocaisDoPromotor(localStorage.getItem('username')!).subscribe((locais:local[])=>{
        this.locais=locais;
      },(error)=>{
        alert("Não foi possível aceder aos seus locais!");
      });
    }
    else if(localStorage.getItem("role")==="promotor"){
      this.restLocais.mostrarLocais().subscribe((locais:local[])=>{
        this.locais=locais;
      },(error)=>{
        alert("Não foi possível aceder aos seus locais!");
      });
    }
  }
}
