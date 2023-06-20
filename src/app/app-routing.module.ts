import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { PagesComponent } from './pages/pages.component';
import { UserSearchComponent } from './pages/user-search/user-search.component';
import { alreadyAuthenticatedGuard, unauthenticatedGuard } from './auth/auth.guard';
import { UserProfileComponent } from './pages/user-profile/user-profile.component';
import { GameSearchComponent } from './pages/game-search/game-search.component';
import { GameDetailComponent } from './pages/game-detail/game-detail.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { LobbyDetailComponent } from "./pages/lobby-detail/lobby-detail.component";
import { ErrorComponent } from "./pages/error/error.component";

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [alreadyAuthenticatedGuard],
  },
  {
    path: 'register',
    component: RegisterComponent,
    canActivate: [alreadyAuthenticatedGuard],
  },
  {
    path: '',
    component: PagesComponent,
    children: [
      {
        path: '',
        data: { title: 'Recherche un Jeu' },
        canActivate: [unauthenticatedGuard],
        component: GameSearchComponent,
      },
      {
        path: 'game-search',
        data: { title: 'Recherche un Jeu' },
        canActivate: [unauthenticatedGuard],
        component: GameSearchComponent,
      },
      {
        path: 'user-search',
        data: { title: 'Recherche un joueur' },
        canActivate: [unauthenticatedGuard],
        component: UserSearchComponent,
      },
      {
        path: 'user-profile/:id',
        data: { title: 'Profile' },
        canActivate: [unauthenticatedGuard],
        component: UserProfileComponent,
      },
      {
        path: 'game-detail/:id',
        data: { title: 'Game' },
        canActivate: [unauthenticatedGuard],
        component: GameDetailComponent,
      },
      {
        path: 'lobby-detail/:id',
        data: { title: 'Lobby' },
        canActivate: [unauthenticatedGuard],
        component: LobbyDetailComponent,
      },
      {
        path: 'user-profile',
        data: { title: 'Profile' },
        canActivate: [unauthenticatedGuard],
        component: UserProfileComponent,
      },
    ],
  },
  {
    path: 'server-error',
    component: ErrorComponent,
  },
  {
    path: '**',
    pathMatch: 'full',
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
