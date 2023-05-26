import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserSearchComponent } from './user-search/user-search.component';
import { PagesComponent } from './pages.component';
import { AppRoutingModule } from '../app-routing.module';
import { SharedModule } from '../shared/shared.module';
import { LandingComponent } from './landing/landing.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { GameSearchComponent } from './game-search/game-search.component';
import { GameDetailComponent } from './game-detail/game-detail.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { CreateLobbyComponent } from './create-lobby/create-lobby.component';

@NgModule({
  declarations: [
    UserSearchComponent,
    PagesComponent,
    LandingComponent,
    UserProfileComponent,
    GameSearchComponent,
    GameDetailComponent,
    NotFoundComponent,
    CreateLobbyComponent,
  ],
  exports: [],
  imports: [CommonModule, AppRoutingModule, SharedModule],
})
export class PagesModule {}
