import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { RestUtilizadorService } from 'src/app/services/Utilizadores/rest-utilizador.service';
import { CustomErrorStateMatcher } from 'src/app/shared/custom-state-matcher';

@Component({
  selector: 'app-mudar-password',
  templateUrl: './mudar-password.component.html',
  styleUrls: ['./mudar-password.component.css']
})
export class MudarPasswordComponent implements OnInit {
  @Input() passField:any={
    oldPassword:String,
    password:String,
    newpassword1:String
  };

  form: FormGroup;
  customErrorStateMatcher = new CustomErrorStateMatcher();

  constructor(private fb: FormBuilder, private restUser: RestUtilizadorService,private router:Router,private route:ActivatedRoute) {
    this.form = this.fb.group({
      oldpassword: new FormControl('', [Validators.required, Validators.minLength(8)]),
      newpassword1: new FormControl('', [Validators.required, Validators.minLength(8)]),
      newpassword2: new FormControl('', [Validators.required, Validators.minLength(8)]),
    })
  }

  ngOnInit(): void {
    this.passField.oldPassword="";
    this.passField.password="";
    this.passField.newpassword1="";
  }

  updatePassWord(){
    if(this.passField.password!==this.passField.newpassword1){
      alert("Atenção as duas palavras chave não correspondem");
    }
    else
      this.restUser.mudarPassword(this.route.snapshot.params['id'],this.passField).subscribe((res)=>{
        alert("Palavra-chave alterada com sucesso!");
        setTimeout(()=>this.router.navigate(['']),1000);
      },(err)=>{
        alert("Erro na atualização da palavra-chave.Verifique os campos novamente");
      });
    }
  }

