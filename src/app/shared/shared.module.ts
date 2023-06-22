import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { UserCardComponent } from './components/user-card/user-card.component';
import { GameCardComponent } from './components/game-card/game-card.component';
import { ButtonComponent } from './components/button/button.component';
import { ChatComponent } from './components/chat/chat.component';

@NgModule({
  declarations: [
    NavbarComponent,
    UserCardComponent,
    GameCardComponent,
    ButtonComponent,
    ChatComponent,
  ],
  exports: [
    UserCardComponent,
    GameCardComponent,
    NavbarComponent,
    ButtonComponent,
    ChatComponent,
  ],
  imports: [CommonModule, HttpClientModule],
})
export class SharedModule {}
