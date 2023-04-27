import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http: HttpClient) { }

  signUp(email:string, password:string ) {
    return this.http.post<any>('https://api.game7app.com/api/register',{"email": email, "plainPassword": password});//TODO check if its write good url
    // TODO change type from any to User
  }
}
