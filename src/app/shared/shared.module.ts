import { NgModule } from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { UserCardComponent } from './components/user-card/user-card.component';
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";

@NgModule({
  declarations: [
    NavbarComponent,
    UserCardComponent,
    GameCardComponent,
    FriendCardComponent,
  ],
    exports: [
      UserCardComponent,
      GameCardComponent,
      NavbarComponent,
      FriendCardComponent
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
