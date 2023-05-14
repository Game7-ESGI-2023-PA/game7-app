import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { PagesComponent } from './pages/pages.component';
import { UserSearchComponent } from './pages/user-search/user-search.component';
import { LandingComponent } from './pages/landing/landing.component';
import { alreadyAuthenticatedGuard, unauthenticatedGuard } from './auth/auth.guard';
import { UserProfileComponent } from './pages/user-profile/user-profile.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [alreadyAuthenticatedGuard]
  },
  {
    path: 'register',
    component: RegisterComponent,
    canActivate: [alreadyAuthenticatedGuard]
  },
  {
    path: '',
    component: PagesComponent,
    children: [
      {
        path: '',
        data: { title: 'Game7' },
        component: LandingComponent,
        canActivate: [alreadyAuthenticatedGuard]
      },
      {
        path: 'user-search',
        data: { title: 'Rechercer un joueur' },
        canActivate: [unauthenticatedGuard],
        component: UserSearchComponent,
      },
      {
        path: 'user-profile',
        data: { title: 'Profile' },
        canActivate: [unauthenticatedGuard],
        component: UserProfileComponent,
      },
    ],
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
