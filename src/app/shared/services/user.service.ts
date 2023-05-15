import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { UserInterface } from "../interfaces/UserInterface";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {
  }

  search(query: string) {
    return this.http.get<UserInterface[]>(`/users?nickname=${query}`);
  }
}