import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TicketsRoutingModule } from './tickets-routing.module';
import { MostrarTicketsClientComponent } from './mostrar-tickets-client/mostrar-tickets-client.component';
import {MatExpansionModule} from '@angular/material/expansion';
import {angMaterial} from '../angularMaterialModule/angMaterial.module'
import {MatTabsModule} from '@angular/material/tabs';
import { CancelarTicketComponent } from './cancelar-ticket/cancelar-ticket.component';
import { ListarTicketsComponent } from './listar-tickets/listar-tickets.component';
import { ListarTicketsCanceladosComponent } from './listar-tickets-cancelados/listar-tickets-cancelados.component';

@NgModule({
  declarations: [
    MostrarTicketsClientComponent,
    CancelarTicketComponent,
    ListarTicketsComponent,
    ListarTicketsCanceladosComponent
  ],
  imports: [
    CommonModule,
    TicketsRoutingModule,
    MatExpansionModule,
    angMaterial,
    MatTabsModule
  ]
})
export class TicketsModule { }
