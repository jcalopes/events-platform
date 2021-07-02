import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { evento } from 'src/app/models/evento';

@Component({
  selector: 'app-dialog-buy-ticket',
  templateUrl: './dialog-buy-ticket.component.html',
  styleUrls: ['./dialog-buy-ticket.component.css']
})
export class DialogBuyTicketComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<DialogBuyTicketComponent>
    ,@Inject(MAT_DIALOG_DATA) public eve:evento) {
  }

  ngOnInit(): void {
  }

  cancel(): void {
    localStorage.setItem("operation", "cancel");
    this.dialogRef.close();
  }

  confirm():void{
    localStorage.setItem("operation", "confirm");
    this.dialogRef.close();
  }

}
