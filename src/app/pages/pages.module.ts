import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserSearchComponent } from './user-search/user-search.component';
import { PagesComponent } from './pages.component';
import { AppRoutingModule } from '../app-routing.module';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from "@angular/material/input";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";



@NgModule({
  declarations: [
    UserSearchComponent,
    PagesComponent,

  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule
  ]
})
export class PagesModule { }
