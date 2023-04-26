import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {
  }

  login(email:string, password:string ) {
    return this.http.post<any>('/api/login', {email, password});//TODO write good url
      // this is just the HTTP call,                           //TODO change type from any to User
      // we still need to handle the reception of the token
  }
}
