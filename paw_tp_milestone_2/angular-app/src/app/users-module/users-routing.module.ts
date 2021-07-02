import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagenotfoundComponent } from '../shared/pagenotfound/pagenotfound.component';
import { CriarUtilizadorComponent } from '../shared/criar-utilizador/criar-utilizador.component';
import { AuthGuardService } from '../shared/authGuardService';
import { EditarPerfilComponent } from './editar-perfil/editar-perfil.component';
import { MudarPasswordComponent } from './mudar-password/mudar-password.component';
import { AreaClienteComponent } from './area-cliente/area-cliente.component';
import { DesativarContaComponent } from './desativar-conta/desativar-conta.component';

const routes: Routes = [
      {
        path: 'criar',
        component: CriarUtilizadorComponent
      },
      {
        path: 'conta',
        component: AreaClienteComponent,
        canActivate: [AuthGuardService],
        children: [
          {
            path: 'editar/:id',
            component: EditarPerfilComponent,
            canActivate: [AuthGuardService]
          },
          {
            path: 'desativar/:id',
            pathMatch: 'full',
            component: DesativarContaComponent,
            canActivate: [AuthGuardService]
          },
          {
            path: 'alterarPass/:id',
            pathMatch: 'full',
            component: MudarPasswordComponent,
            canActivate: [AuthGuardService]
          },
          {
            path:'eventos',
            pathMatch:'prefix',
            loadChildren:()=>import('../event-module/event.module').then(m=>m.EventModule)
          },
          {

            path:'locais',
            pathMatch:'prefix',
            loadChildren:()=>import('../locations-module/locations-module.module').then(m=>m.LocationsModuleModule)
          }, 
          {
            path:'compras',
            pathMatch:'prefix',
            loadChildren:()=>import('../tickets-module/tickets.module').then(m=>m.TicketsModule)
          }
        ]
  },
  {
    path: '**',
    component: PagenotfoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
