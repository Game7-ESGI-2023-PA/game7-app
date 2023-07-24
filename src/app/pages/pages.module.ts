import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserSearchComponent } from './user-search/user-search.component';
import { PagesComponent } from './pages.component';
import { AppRoutingModule } from '../app-routing.module';
import { SharedModule } from '../shared/shared.module';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { GameSearchComponent } from './game-search/game-search.component';
import { GameDetailComponent } from './game-detail/game-detail.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { LobbyDetailComponent } from './lobby-detail/lobby-detail.component';
import { ErrorComponent } from './error/error.component';
import { LobbyInfoComponent } from "./lobby-detail/lobby-info/lobby-info.component";
import { LobbyTableComponent } from "./game-detail/lobby-table/lobby-table.component";
import { LobbyInitFormComponent } from './lobby-detail/lobby-init-form/lobby-init-form.component';
import { ReactiveFormsModule } from "@angular/forms";
import { LobbyPlayGameComponent } from './lobby-detail/lobby-play-game/lobby-play-game.component';
import { UserLobbiesListComponent } from './user-profile/user-lobbies-list/user-lobbies-list.component';

@NgModule({
  declarations: [
    UserSearchComponent,
    PagesComponent,
    UserProfileComponent,
    GameSearchComponent,
    GameDetailComponent,
    NotFoundComponent,
    LobbyDetailComponent,
    LobbyInfoComponent,
    LobbyTableComponent,
    ErrorComponent,
    LobbyInitFormComponent,
    LobbyPlayGameComponent,
    UserLobbiesListComponent,
  ],
  exports: [],
  imports: [CommonModule, AppRoutingModule, SharedModule, ReactiveFormsModule]
})
export class PagesModule {}
