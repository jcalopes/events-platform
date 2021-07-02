import { NgModule } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select/';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatRadioModule } from '@angular/material/radio';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatTableModule } from '@angular/material/table';

@NgModule({
    declarations: [],
    imports: [
        MatInputModule,
        MatButtonModule,
        MatCardModule,
        MatMenuModule,
        MatFormFieldModule,
        MatSelectModule,
        MatIconModule,
        FormsModule,
        MatRadioModule,
        ReactiveFormsModule,
        MatSidenavModule,
        MatAutocompleteModule,
        MatTableModule
    ],
    exports: [
        MatInputModule,
        MatButtonModule,
        MatCardModule,
        MatMenuModule,
        MatFormFieldModule,
        MatSelectModule,
        MatIconModule,
        FormsModule,
        MatRadioModule,
        ReactiveFormsModule,
        MatSidenavModule,
        MatAutocompleteModule,
        MatTableModule
    ]
})
export class angMaterial { }
