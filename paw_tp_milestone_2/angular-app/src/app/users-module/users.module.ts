import { NgModule } from '@angular/core';
import { UsersRoutingModule } from './users-routing.module';
import { CriarUtilizadorComponent } from '../shared/criar-utilizador/criar-utilizador.component';
import { angMaterial } from '../angularMaterialModule/angMaterial.module';
import { AreaClienteComponent } from './area-cliente/area-cliente.component';
import { EditarPerfilComponent } from './editar-perfil/editar-perfil.component';
import { MudarPasswordComponent } from './mudar-password/mudar-password.component';
import { DesativarContaComponent } from './desativar-conta/desativar-conta.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    CriarUtilizadorComponent,
    AreaClienteComponent,
    EditarPerfilComponent,
    MudarPasswordComponent,
    DesativarContaComponent
  ],
  imports: [
    UsersRoutingModule,
    angMaterial,
    CommonModule
  ],
  providers: [
  ]
})

export class UsersModule {

}

