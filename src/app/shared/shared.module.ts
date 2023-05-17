import { NgModule } from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { UserCardComponent } from './components/user-card/user-card.component';
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import { FriendCardComponent } from './components/friend-card/friend-card.component';
import {MatMenuModule} from "@angular/material/menu";
import { UserMiniCardComponent } from './components/user-mini-card/user-mini-card.component';

@NgModule({
  declarations: [
    NavbarComponent,
    UserCardComponent,
    FriendCardComponent,
    UserMiniCardComponent,
  ],
  exports: [
    UserCardComponent,
    NavbarComponent,
    FriendCardComponent,
    UserMiniCardComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    MatCardModule,
    MatButtonModule,
    NgOptimizedImage,
    MatMenuModule
  ],
})
export class SharedModule { }
