import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatRadioChange } from '@angular/material/radio';
import { CustomErrorStateMatcher } from 'src/app/shared/custom-state-matcher';

@Component({
  selector: 'app-dialog-edit-user',
  templateUrl: './dialog-edit-user.component.html',
  styleUrls: ['./dialog-edit-user.component.css']
})
export class DialogEditUserComponent implements OnInit {
  form:FormGroup;
  customErrorStateMatcher=new CustomErrorStateMatcher();

  constructor(private fb:FormBuilder,
    public dialogRef: MatDialogRef<DialogEditUserComponent>
    ,@Inject(MAT_DIALOG_DATA) public data: any) { 
      this.form = this.fb.group({
        fname: new FormControl('', [Validators.required, Validators.pattern('^[A-Za-zñÑáéíóúÁÉÍÓÚ]+$'), Validators.maxLength(50)]),
        lname: new FormControl('', [Validators.required, Validators.maxLength(50)]),
        email: new FormControl('', [Validators.required, Validators.email]),
        nif: new FormControl('', [Validators.required, Validators.pattern("^[0-9]{9}$")]),
        contact: new FormControl('', [Validators.required, Validators.pattern("^[0-9]{9}$")])
      })
    }

  ngOnInit(): void {
  }
  
  cancel(): void {
    localStorage.setItem("operacao","cancelar");
    this.dialogRef.close();
  }

  updateUser(){
    if(!this.form.valid){
      localStorage.setItem("operacao","invalidForm");
    }
    else{
      localStorage.setItem("operacao","validForm");
    }
  }
}
