import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatStepperModule } from '@angular/material/stepper';
import { MatTabsModule } from '@angular/material/tabs';
import { LocationsModuleRoutingModule } from './locations-module-routing.module';
import { MostrarLocaisPromotorComponent } from './mostrar-locais-promotor/mostrar-locais-promotor.component';
import { angMaterial } from '../angularMaterialModule/angMaterial.module';
import { LocalEventoComponent } from './local-evento/local-evento.component';
import { AdicionarLocalComponent } from './adicionar-local/adicionar-local.component';
import {MatDialogModule} from '@angular/material/dialog';
import { DialogEditLocalComponent } from './dialog-edit-local/dialog-edit-local.component';

@NgModule({
  declarations: [
    MostrarLocaisPromotorComponent,
    LocalEventoComponent,
    AdicionarLocalComponent,
    DialogEditLocalComponent
  ],
  imports: [
    CommonModule,
    LocationsModuleRoutingModule,
    MatTabsModule,
    MatStepperModule,
    angMaterial,
    MatDialogModule
  ]
})
export class LocationsModuleModule { }
