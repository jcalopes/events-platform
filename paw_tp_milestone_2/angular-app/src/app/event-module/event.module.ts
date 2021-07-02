import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventosPromotorComponent } from './mostrar-eventos-promotor/eventos-promotor.component';
import { EventRoutingModule } from './event-routing.module';
import { MatTabsModule } from '@angular/material/tabs';
import { angMaterial } from '../angularMaterialModule/angMaterial.module';
import { AdicionarEventoComponent } from './adicionar-evento/adicionar-evento.component';
import { ListarEventosPromotorComponent } from './listar-eventos-promotor/listar-eventos-promotor.component';
import { EventosAtivadosComponent } from './eventos-ativados/eventos-ativados.component';
import { DialogEditEventComponent } from './dialog-edit-event/dialog-edit-event.component';
import { MatDialogModule } from '@angular/material/dialog';
import { ValidarBilhetesComponent } from './validar-bilhetes/validar-bilhetes.component';

@NgModule({
  declarations: [
    EventosPromotorComponent,
    AdicionarEventoComponent,
    ListarEventosPromotorComponent,
    EventosAtivadosComponent,
    DialogEditEventComponent,
    ValidarBilhetesComponent
  ],
  imports: [
    CommonModule,
    EventRoutingModule,
    MatTabsModule,
    angMaterial,
    MatDialogModule
  ]
})
export class EventModule { }
