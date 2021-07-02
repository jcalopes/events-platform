import { Component, Inject, Input } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSelectChange } from '@angular/material/select';
import { evento } from 'src/app/models/evento';
import { local } from 'src/app/models/local';
import { CustomErrorStateMatcher } from 'src/app/shared/custom-state-matcher';

@Component({
  selector: 'app-dialog-edit-event',
  templateUrl: './dialog-edit-event.component.html',
  styleUrls: ['./dialog-edit-event.component.css']
})
export class DialogEditEventComponent {

  form: FormGroup;
  customErrorStateMatcher = new CustomErrorStateMatcher();

  constructor(private fb: FormBuilder, public dialogRef: MatDialogRef<DialogEditEventComponent>
    , @Inject(MAT_DIALOG_DATA) public data:{eve:evento,loc:local[]}) {
    this.form = this.fb.group({
      nome: new FormControl('', [Validators.required]),
      descricao: new FormControl('', [Validators.required]),
      dataInicio: new FormControl('', [Validators.required]),
      dataFim: new FormControl('', [Validators.required])
    })
  }

  cancel(): void {
    localStorage.setItem("operation", "cancel");
    this.dialogRef.close();
  }

  checkForm() {
    if (!this.form.valid) {
      localStorage.setItem("operation", "invalidForm");
    }
    else {
      localStorage.setItem("operation", "validForm");
    }
  }

  radioChangeLocal(event: MatSelectChange) {
    this.data.eve.local = event.value;
  }
}
