import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { PagesComponent } from './pages/pages.component';
import { UserSearchComponent } from './pages/user-search/user-search.component';
import { authGuard } from './auth/auth.guard';
import { LandingComponent } from './pages/landing/landing.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: '',
    component: PagesComponent,
    children: [
      {
        path: '',
        data: { title: 'Game7' },
        component: LandingComponent,
      },
      {
        path: 'user-search',
        data: { title: 'Rechercer un joueur' },
        canActivate: [authGuard],
        component: UserSearchComponent,
      },
    ],
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
