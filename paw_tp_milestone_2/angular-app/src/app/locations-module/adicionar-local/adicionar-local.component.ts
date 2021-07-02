import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { local } from 'src/app/models/local';
import { RestLocaisService } from 'src/app/services/Locais/rest-locais.service';
import { CustomErrorStateMatcher } from 'src/app/shared/custom-state-matcher';

@Component({
  selector: 'app-adicionar-local',
  templateUrl: './adicionar-local.component.html',
  styleUrls: ['./adicionar-local.component.css']
})
export class AdicionarLocalComponent implements OnInit {
  @Input() newLocal:local=new local("",localStorage.getItem('username')!,"",
  0,0,"","","","");

  form:FormGroup;
  fileUpload:File=new File([],"");
  fileName = '';
  message = '';
  customErrorStateMatcher=new CustomErrorStateMatcher();

  constructor(private fb:FormBuilder,private restLocal:RestLocaisService,private router:Router) {
    this.form=this.fb.group({
      nome: new FormControl('', [Validators.required, Validators.pattern('^[A-Za-zñÑáéíóúÁÉÍÓÚ ]+$'), Validators.maxLength(50)]),
      lotacao: new FormControl('', [Validators.required,Validators.pattern("^[0-9]*$")]),
      lotacaoPerc: new FormControl('', [Validators.required,Validators.max(100)]),
      rua: new FormControl('', [Validators.required, Validators.pattern('^[A-Za-zñÑáéíóúÁÉÍÓÚ ]+$'), Validators.maxLength(50)]),
      codPostal: new FormControl('', [Validators.required, Validators.maxLength(8)]),
      cidade: new FormControl('', [Validators.required, Validators.pattern('^[A-Za-zñÑáéíóúÁÉÍÓÚ ]+$'), Validators.maxLength(50)]),
      pais: new FormControl('', [Validators.required, Validators.pattern('^[A-Za-zñÑáéíóúÁÉÍÓÚ ]+$'), Validators.maxLength(50)]),
    })
   }

  ngOnInit(): void {
  }

  addLocal(){
    if(this.form.valid){
      if(this.fileUpload){
        this.restLocal.uploadFile(this.fileUpload,"newimage").subscribe((result:any) => {
        this.fileName = '';
        this.message = '';
   });
      this.restLocal.criarLocal(this.newLocal).subscribe((res)=>{
        alert("Registado com sucesso."); 
        setTimeout(()=>location.reload(),1000);
      },(error)=>{
        alert("Não foi possivel registar o local.");
      });
  }
}
    else{
      alert("Erro no preenchimento do formulário");
    }
  }

  onFileSelected(event:any) {
    this.fileUpload = event.target.files[0];
    this.fileName = this.fileUpload.name;
  }
}
