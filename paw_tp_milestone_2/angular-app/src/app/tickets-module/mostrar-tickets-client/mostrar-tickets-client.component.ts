import { Component, OnInit } from '@angular/core';
import { bilhete } from 'src/app/models/bilhete';
import { RestBilheteService } from 'src/app/services/Bilhetes/rest-bilhete-service.service';

@Component({
  selector: 'app-mostrar-tickets-client',
  templateUrl: './mostrar-tickets-client.component.html',
  styleUrls: ['./mostrar-tickets-client.component.css']
})
export class MostrarTicketsClientComponent implements OnInit {
  panelOpenState=false;
  constructor(private restTickets:RestBilheteService) { }

  ngOnInit(): void {
  }
}
