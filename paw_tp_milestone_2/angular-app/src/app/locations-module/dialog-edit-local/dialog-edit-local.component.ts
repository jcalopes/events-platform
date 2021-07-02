import { Component, Inject, Input } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { local } from 'src/app/models/local';
import { CustomErrorStateMatcher } from 'src/app/shared/custom-state-matcher';

@Component({
  selector: 'app-dialog-edit-local',
  templateUrl: './dialog-edit-local.component.html',
  styleUrls: ['./dialog-edit-local.component.css']
})
export class DialogEditLocalComponent {
  form:FormGroup;
  customErrorStateMatcher=new CustomErrorStateMatcher();

  constructor(private fb:FormBuilder,
    public dialogRef: MatDialogRef<DialogEditLocalComponent>
    ,@Inject(MAT_DIALOG_DATA) public loc: local) {
      this.form=this.fb.group({
        nome: new FormControl('', [Validators.required, Validators.pattern('^[A-Za-zñÑáéíóúÁÉÍÓÚ ]+$'), Validators.maxLength(50)]),
        lotacao: new FormControl('', [Validators.required,Validators.pattern("^[0-9]*$")]),
        lotacaoPerc: new FormControl('', [Validators.required,Validators.max(100)]),
        rua: new FormControl('', [Validators.required, Validators.pattern('^[A-Za-zñÑáéíóúÁÉÍÓÚ ]+$'), Validators.maxLength(50)]),
        codPostal: new FormControl('', [Validators.required,Validators.pattern("^[0-9][0-9][0-9][0-9]-[0-9][0-9][0-9]*$")]),
        cidade: new FormControl('', [Validators.required, Validators.pattern('^[A-Za-zñÑáéíóúÁÉÍÓÚ ]+$'), Validators.maxLength(50)]),
        pais: new FormControl('', [Validators.required, Validators.pattern('^[A-Za-zñÑáéíóúÁÉÍÓÚ ]+$'), Validators.maxLength(50)]),
      })
    }

    cancel(): void {
      localStorage.setItem("operacao","cancelar");
      this.dialogRef.close();
    }

    checkForm(){
      if(!this.form.valid){
        localStorage.setItem("operacao","invalidForm");
      }
      else{
        localStorage.setItem("operacao","validForm");
      }
    }
}
