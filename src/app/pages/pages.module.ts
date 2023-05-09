import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserSearchComponent } from './user-search/user-search.component';
import { PagesComponent } from './pages.component';
import { AppRoutingModule } from '../app-routing.module';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from "@angular/material/input";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import { SharedModule } from '../shared/shared.module';
import { LandingComponent } from './landing/landing.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { NavbarComponent } from '../shared/components/navbar/navbar.component';



@NgModule({
  declarations: [
    UserSearchComponent,
    PagesComponent,
    LandingComponent,
    UserProfileComponent,

  ],
  exports: [
    UserProfileComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    SharedModule
  ]
})
export class PagesModule { }
