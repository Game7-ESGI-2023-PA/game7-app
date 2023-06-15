import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LobbyInterface } from '../interfaces/LobbyInterface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LobbyService {
  constructor(private http: HttpClient) {}

  create(gameId: string): Observable<LobbyInterface> {
    return this.http.post<LobbyInterface>('/game_lobbies', {
      game: `/api/games/${gameId}`,
    });
  }

  findById(lobbyId: string): Observable<LobbyInterface> {
    return this.http.get<LobbyInterface>(`/game_lobbies/${lobbyId}`)
  }
}
