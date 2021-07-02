import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { promise } from 'selenium-webdriver';
import { bilhete } from 'src/app/models/bilhete';
import { RestBilheteService } from 'src/app/services/Bilhetes/rest-bilhete-service.service';
import { RestUtilizadorService } from 'src/app/services/Utilizadores/rest-utilizador.service';

@Component({
  selector: 'app-cancelar-ticket',
  templateUrl: './cancelar-ticket.component.html',
  styleUrls: ['./cancelar-ticket.component.css']
})
export class CancelarTicketComponent implements OnInit {
  tickets: bilhete[] = [];
  userLogin: any;
  fileName = '';
  message = '';
  constructor(private restTickets: RestBilheteService, private restUsers: RestUtilizadorService, private router: Router) { }

  ngOnInit(): void {
    this.restTickets.showBilhetesUtilizador(localStorage.getItem('username')!)
      .subscribe((tickets: bilhete[]) => {
        if (tickets.length > 0) {
          this.tickets = tickets;
        }
      }, (error) => {
        alert("Não foi possivel aceder às suas compras.")
      });
  }

  cancelar(id: String) {
    const totalCancelados=new Promise((resolve) => {
      let num = 0;
      this.restTickets.showBilhetesUtilizador(localStorage.getItem('username')!)
        .subscribe((tickets: bilhete[]) => {
          tickets.forEach((tick) => {
            if (tick.cancelado === true && new Date(tick.dataCancelamento).getFullYear() === new Date(Date.now()).getFullYear()
              && new Date(tick.dataCancelamento).getMonth() === new Date(Date.now()).getMonth()) {
              num++;
            }
          }
          );
          resolve(num);
        });
    });

    totalCancelados.then((res)=>{
      this.restTickets.cancelarBilhete(id).subscribe((doc) => {
        alert("Bilhete cancelado com sucesso.");
      });
      return res;
    }).then((res)=>{
      if(res as unknown as Number>=5){
        this.restUsers.toBan(localStorage.getItem('username')!).subscribe((res) => {
           alert("5 cancelamentos num mês.Foi banido do sistema.");
           localStorage.removeItem("currentUser");
           localStorage.removeItem("role");
           localStorage.removeItem("username");
           localStorage.removeItem("id");
           this.router.navigate(['']);
         })
      }
      setTimeout(() => location.reload(), 500);
    }).catch((error)=>{
      alert("Não foi possivel cancelar bilhete");
    });
  }

  onFileSelected(event: any, id: String) {
    const file: File = event.target.files[0];
    if (file) {
      this.fileName = file.name;
      this.restTickets.uploadFile(file, id).subscribe((result: any) => {
        setTimeout(() => location.reload(), 500);
        alert("Poster Atualizado!")
        this.fileName = '';
        this.message = '';
      });
    }
  }
}

