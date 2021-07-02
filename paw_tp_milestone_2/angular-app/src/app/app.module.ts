import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToolbarComponent } from 'src/app/shared/toolbar/toolbar.component';
import { HomeComponent } from './homepages/home/home.component';
import { PagenotfoundComponent } from 'src/app/shared/pagenotfound/pagenotfound.component';
import { RestEventoService } from '../app/services/Eventos/rest-evento.service'
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { RestLocaisService } from './services/Locais/rest-locais.service';
import { RestBilheteService } from './services/Bilhetes/rest-bilhete-service.service';
import { angMaterial } from '../../src/app/angularMaterialModule/angMaterial.module';
import { JwtInterceptorService } from './shared/httpInterceptor';
import { MostrarTopEventosComponent } from './homepages/mostrar-top-eventos/mostrar-top-eventos.component';
import { MostrarDestaquesComponent } from './homepages/mostrar-destaques/mostrar-destaques.component';
import { MostrarEventoComponent } from './homepages/mostrar-evento/mostrar-evento.component';
import { DialogBuyTicketComponent } from './homepages/dialog-buy-ticket/dialog-buy-ticket.component';
import { MatDialogModule } from '@angular/material/dialog';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MostrarAllEventsComponent } from './homepages/mostrar-all-events/mostrar-all-events.component';
import { MostrarLocaisComponent } from './homepages/mostrar-locais/mostrar-locais.component';
import { MostrarEventsLocaisComponent } from './homepages/mostrar-events-locais/mostrar-events-locais.component';
import { AdminOverviewComponent } from './homepages/admin-overview/admin-overview.component';
import { GoogleChartsModule } from 'angular-google-charts';
import { EventosMaisVendidosComponent } from './homepages/admin-overview/google-charts/eventos-mais-vendidos/eventos-mais-vendidos.component';
import { MostrarCategoriasComponent } from './homepages/admin-overview/google-charts/show-EventosLucrativos/mostrar-categorias.component';
import { FaturacaoMesComponent } from './homepages/admin-overview/google-charts/faturacao-mes/faturacao-mes.component';
import { ManageClientsComponent } from './homepages/admin-overview/manage-clients/manage-clients.component';
import { DialogEditUserComponent } from './homepages/admin-overview/dialog-edit-user/dialog-edit-user.component';
import { ShowCategoriasComponent } from './homepages/admin-overview/show-categorias/show-categorias.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    HomeComponent,
    PagenotfoundComponent,
    MostrarTopEventosComponent,
    MostrarDestaquesComponent,
    MostrarEventoComponent,
    DialogBuyTicketComponent,
    MostrarAllEventsComponent,
    MostrarLocaisComponent,
    MostrarEventsLocaisComponent,
    AdminOverviewComponent,
    EventosMaisVendidosComponent,
    MostrarCategoriasComponent,
    FaturacaoMesComponent,
    ManageClientsComponent,
    DialogEditUserComponent,
    ShowCategoriasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    HttpClientModule,
    angMaterial,
    MatDialogModule,
    MatDatepickerModule,
    GoogleChartsModule
  ],
  providers: [
    RestEventoService,
    RestLocaisService,
    RestBilheteService,
    {
      provide: HTTP_INTERCEPTORS, useClass: JwtInterceptorService, multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
