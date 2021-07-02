import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MostrarLocaisPromotorComponent } from './mostrar-locais-promotor/mostrar-locais-promotor.component';

const routes: Routes = [
  {
    path:'all',
    pathMatch: 'full',
    component: MostrarLocaisPromotorComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LocationsModuleRoutingModule { }
