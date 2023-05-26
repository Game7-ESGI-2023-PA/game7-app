import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GameInterface } from '../interfaces/GameInterface';

@Injectable({
  providedIn: 'root',
})
export class GameService {
  constructor(private http: HttpClient) {}

  search(query: string): Observable<GameInterface[]> {
    return this.http.get<GameInterface[]>(`/games?name=${query}`);
  }

  findById(id: string): Observable<GameInterface> {
    return this.http.get<GameInterface>(`/games/${id}`);
  }
}
