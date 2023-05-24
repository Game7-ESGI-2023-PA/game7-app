import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { UserCardComponent } from './components/user-card/user-card.component';
import { GameCardComponent } from './components/game-card/game-card.component';
import { ButtonComponent } from './components/button/button.component';

@NgModule({
  declarations: [NavbarComponent, UserCardComponent, GameCardComponent, ButtonComponent],
  exports: [UserCardComponent, GameCardComponent, NavbarComponent, ButtonComponent],
  imports: [CommonModule, HttpClientModule],
})
export class SharedModule {}
