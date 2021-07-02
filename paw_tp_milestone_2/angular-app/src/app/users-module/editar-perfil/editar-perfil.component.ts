import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { user } from 'src/app/models/user';
import { RestUtilizadorService } from 'src/app/services/Utilizadores/rest-utilizador.service';
import { CustomErrorStateMatcher } from 'src/app/shared/custom-state-matcher';

@Component({
  selector: 'app-editar-perfil',
  templateUrl: './editar-perfil.component.html',
  styleUrls: ['./editar-perfil.component.css']
})
export class EditarPerfilComponent implements OnInit {
  @Input() newUser: user = new user("","", "", "user", "", "", 0, "", 0, true);
  form: FormGroup;
  customErrorStateMatcher = new CustomErrorStateMatcher();

  constructor(private fb: FormBuilder, private restUser: RestUtilizadorService,private router:Router,private route:ActivatedRoute) {
    this.form = this.fb.group({
      fname: new FormControl('', [Validators.required, Validators.pattern('^[A-Za-zñÑáéíóúÁÉÍÓÚ]+$'), Validators.maxLength(50)]),
      lname: new FormControl('', [Validators.required, Validators.maxLength(50)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      nif: new FormControl('', [Validators.required, Validators.pattern("^[0-9]{9}$")]),
      contact: new FormControl('', [Validators.required, Validators.pattern("^[0-9]{9}$")])
    })
  }

  ngOnInit(): void {
    this.restUser.obterUtilizador(this.route.snapshot.params['id']).subscribe((result:user)=>{
        this.newUser=result;
    },(error)=>{
        alert("Erro no servidor");
    });
  }

  updateUser(){
     if(!this.form.invalid){
       this.restUser.atualizarPerfil(this.route.snapshot.params['id'],this.newUser).subscribe((result:any)=>{
         alert("Dados atualizados com sucesso!");
         setTimeout(()=>this.router.navigate(['']),1000);
       },(error)=>{
         alert("Erro no servidor");
       });
     }
     else{
       alert("Verifique os campos introduzidos!");
     }
   }
}
