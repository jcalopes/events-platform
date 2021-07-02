import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { AdminOverviewComponent } from './homepages/admin-overview/admin-overview.component';
import { HomeComponent } from './homepages/home/home.component';
import { MostrarAllEventsComponent } from './homepages/mostrar-all-events/mostrar-all-events.component';
import { MostrarEventoComponent } from './homepages/mostrar-evento/mostrar-evento.component';
import { MostrarLocaisComponent } from './homepages/mostrar-locais/mostrar-locais.component';
import { AuthGuardService } from './shared/authGuardService';
import { PagenotfoundComponent } from './shared/pagenotfound/pagenotfound.component'
const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'admin',
    component: AdminOverviewComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path:'eventos',
    pathMatch:'full',
    component:MostrarAllEventsComponent
  },
  {
    path: 'evento/:id',
    pathMatch: 'full',
    component: MostrarEventoComponent
  },
  {
    path: 'locais',
    pathMatch: 'full',
    component: MostrarLocaisComponent
  },
  {
    path:'user',
    pathMatch:'prefix',
    loadChildren:()=>import('./users-module/users.module').then(m=>m.UsersModule)
  },
  {
    path: '**',
    component: PagenotfoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

       