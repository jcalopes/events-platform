import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { user } from 'src/app/models/user';
import { RestUtilizadorService } from 'src/app/services/Utilizadores/rest-utilizador.service';
import { DialogEditUserComponent } from '../dialog-edit-user/dialog-edit-user.component';

@Component({
  selector: 'app-manage-clients',
  templateUrl: './manage-clients.component.html',
  styleUrls: ['./manage-clients.component.css']
})
export class ManageClientsComponent implements OnInit {
  users: user[] = [];
  constructor(private restUser: RestUtilizadorService,public dialog: MatDialog) { }
  dataSource:any[]=[];

  ngOnInit(): void {
    this.restUser.obterUtilizadores().subscribe((users)=>{
      users.forEach((user)=>{
        let currentUser={'_id':user._id,'username':user.username,'fname':user.fname,'lname':user.lname,
        'ativo':user.active,'contact':user.contact,'nif':user.nif,'role':user.role,'email':user.email}
        this.dataSource.push(currentUser);
      });
    });
  }

  delete(id:String){
    this.restUser.removerUtilizador(id).subscribe((res)=>{
        alert("Utilizador removido");
        setTimeout(()=>location.reload(),500);
    },(error)=>{
      alert("Não foi possivel eliminar o utilizador");
    });
  }


  editUser(utilizador:any): void {
    const dialogRef = this.dialog.open(DialogEditUserComponent, {
      width: '600px', height: 'auto'
      , data: utilizador
    });

  dialogRef.afterClosed().subscribe(result => {
    if (localStorage.getItem("operacao")==='validForm') {
          this.restUser.atualizarPerfil(result._id,result).subscribe((res)=>{
            alert("Utilizador atualizado com sucesso");
            localStorage.removeItem("operation");
            setTimeout(()=>location.reload(),500);
          },((error)=>{
            localStorage.removeItem("operation");
            alert("Erro na atualização dos dados.");
          }));
      }
      else if(localStorage.getItem("operation")==='invalidForm') {
        alert("Os dados do formulário são inválidos.")
        localStorage.removeItem("operation");
        location.reload();
      }
      else{
        localStorage.removeItem("operation");
      }
  });
}
}
