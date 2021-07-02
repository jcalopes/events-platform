import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MostrarTicketsClientComponent } from './mostrar-tickets-client/mostrar-tickets-client.component';

const routes: Routes = [
  {
    path:'all',
    pathMatch:'full',
    component:MostrarTicketsClientComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TicketsRoutingModule { }
