import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';
import { RegisterRequest } from '../interfaces/RegisterRequest';
import { LoginRequest } from '../interfaces/LoginRequest';
import { JwtTokenResponse } from '../interfaces/JwtTokenResponse';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  login(loginCredentials: LoginRequest) {
    return this.http.post<JwtTokenResponse>('/login', loginCredentials).pipe(
      tap((res: JwtTokenResponse) => {
        AuthService.storeToken(res.token);
      })
    );
  }

  public static isAuthenticated(): boolean {
    const token = AuthService.getToken();
    const helper = new JwtHelperService(); // TODO: do injection
    return !helper.isTokenExpired(token);
  }

  public static getToken() {
    return localStorage.getItem('id_token');
  }

  private static storeToken(token: string) {
    localStorage.setItem('id_token', token);
  }

  public static logout() {
    localStorage.removeItem('id_token');
  }

  register(credentials: RegisterRequest) {
    return this.http.post('/register', credentials);
  }
}
