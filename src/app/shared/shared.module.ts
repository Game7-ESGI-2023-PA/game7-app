import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import {MatMenuModule} from "@angular/material/menu";

@NgModule({
    declarations: [
        NavbarComponent,
    ],
    exports: [
        NavbarComponent
    ],
    imports: [
        CommonModule,
        HttpClientModule,
        MatMenuModule,
    ]
})
export class SharedModule { }
