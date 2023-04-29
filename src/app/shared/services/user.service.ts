import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

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


export interface UserInterface {
  id: string,
  nickname: string,
  email: string
}
