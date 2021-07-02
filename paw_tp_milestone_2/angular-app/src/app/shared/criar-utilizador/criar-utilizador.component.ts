import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { user } from '../../models/user';
import { CustomErrorStateMatcher } from '../custom-state-matcher';
import { RestUtilizadorService } from '../../services/Utilizadores/rest-utilizador.service';
import { Router } from '@angular/router';
import { MatRadioChange } from '@angular/material/radio';

@Component({
  selector: 'app-criar-utilizador',
  templateUrl: './criar-utilizador.component.html',
  styleUrls: ['./criar-utilizador.component.css']
})
export class CriarUtilizadorComponent implements OnInit {
  @Input() newUser: user = new user("","", "", "user", "", "", 0, "", 0, true);

  form: FormGroup;
  customErrorStateMatcher = new CustomErrorStateMatcher();

  constructor(private fb: FormBuilder, private restUser: RestUtilizadorService,private router:Router) {
    this.form = this.fb.group({
      fname: new FormControl('', [Validators.required, Validators.pattern('^[A-Za-zñÑáéíóúÁÉÍÓÚ]+$'), Validators.maxLength(50)]),
      lname: new FormControl('', [Validators.required, Validators.maxLength(50)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      nif: new FormControl('', [Validators.required, Validators.pattern("^[0-9]{9}$")]),
      contact: new FormControl('', [Validators.required, Validators.pattern("^[0-9]{9}$")]),
      username: new FormControl('', [Validators.required, Validators.maxLength(50)]),
      password: new FormControl('', [Validators.required, Validators.minLength(8)])
    })
  }

  ngOnInit(): void {
  }

  addUser() {
    if (!this.form.invalid) {
      this.restUser.criarUtilizador(this.newUser).subscribe((res)=>{
          alert("Registado com sucesso");
          setTimeout(()=>this.router.navigate(['']),1000);
      },(err)=>{  
          alert("Ocorreu um erro no registo de utilizador.Username já a ser utilizado")
      });
    }
    else {
      alert("Campos são de preenchimento obrigatório!");
    }
  }

  radioChange(event: MatRadioChange) {
    this.newUser.role = event.value;
  }
}
