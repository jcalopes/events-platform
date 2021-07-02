import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PagenotfoundComponent } from "../shared/pagenotfound/pagenotfound.component";
import { EventosPromotorComponent } from "./mostrar-eventos-promotor/eventos-promotor.component";

const routes: Routes = [

    {
        path: 'all',
        component: EventosPromotorComponent
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
export class EventRoutingModule { }