import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { RestUtilizadorService } from 'src/app/services/Utilizadores/rest-utilizador.service';
import { CustomErrorStateMatcher } from 'src/app/shared/custom-state-matcher';

@Component({
  selector: 'app-desativar-conta',
  templateUrl: './desativar-conta.component.html',
  styleUrls: ['./desativar-conta.component.css']
})
export class DesativarContaComponent implements OnInit {

  password:String ="";
  form: FormGroup;
  customErrorStateMatcher = new CustomErrorStateMatcher();

  constructor(private fb: FormBuilder, private restUser:RestUtilizadorService,
    private router:Router, private route: ActivatedRoute) { 
    this.form = this.fb.group({
      pass: new FormControl('', [Validators.required, Validators.minLength(8)])
  })
}

  ngOnInit(): void {
  }

  desativarUser(){
    if(!this.form.invalid){
      this.restUser.removerConta(this.route.snapshot.params['id'],this.password).subscribe((result:any)=>{
        alert("Dados atualizados com sucesso!");
        setTimeout(()=>this.router.navigate(['']),1000);
      },(error)=>{
        alert(error);
      });
    }
    else{
      alert("Verifique os campos introduzidos!");
    }
  }
}


