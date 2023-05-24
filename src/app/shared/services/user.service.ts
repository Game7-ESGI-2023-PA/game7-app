import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserInterface } from '../interfaces/UserInterface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  search(query: string): Observable<UserInterface[]> {
    return this.http.get<UserInterface[]>(`/users?nickname=${query}`);
  }

  me(): Observable<UserInterface> {
    return this.http.get<UserInterface>('/me');
  }

  findById(id: string): Observable<UserInterface> {
    return this.http.get<UserInterface>(`/users/${id}`);
  }
}
