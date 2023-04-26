import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import * as moment from "moment";
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {
  }

  login(email:string, password:string ) {
    return this.http.post<any>('https://api.game7app.com/auth', {email, password});//TODO check if its write good url
                                                                                            // TODO change type from any to User
  }

  private setSession(authResult :any) {     // TODO change type from any
    const expiresAt = moment().add(authResult.expiresIn,'second');

    localStorage.setItem('id_token', authResult.idToken);
    localStorage.setItem("expires_at", JSON.stringify(expiresAt.valueOf()) );
  }

  logout() {
    localStorage.removeItem("id_token");
    localStorage.removeItem("expires_at");
  }

  public isLoggedIn() {
    return moment().isBefore(this.getExpiration());
  }

  isLoggedOut() {
    return !this.isLoggedIn();
  }

  getExpiration() {
    const expiration = localStorage.getItem("expires_at");
    const expiresAt = JSON.parse(expiration as string);
    return moment(expiresAt);
  }
}
