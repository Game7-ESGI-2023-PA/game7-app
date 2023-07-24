import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LobbyInterface } from '../interfaces/LobbyInterface';
import { Observable } from 'rxjs';
import { environment } from "../../../environments/environment";

@Injectable({
  providedIn: 'root',
})
export class LobbyService {
  constructor(private http: HttpClient) {}

  create(gameId: string, isPublic: boolean): Observable<LobbyInterface> {
    return this.http.post<LobbyInterface>('/game_lobbies', {
      game: `/api/games/${gameId}`,
      isPublic: isPublic,
    });
  }

  findById(lobbyId: string): Observable<LobbyInterface> {
    return this.http.get<LobbyInterface>(`/game_lobbies/${lobbyId}`);
  }

  findByUserId(userId: string): Observable<LobbyInterface[]> {
    return this.http.get<LobbyInterface[]>(`/game_lobbies/user/${userId}`);
  }

  joinLobby(lobbyId: string): Observable<LobbyInterface> {
    return this.http.put<LobbyInterface>(`/game_lobbies/${lobbyId}/join`, {});
  }

  sendMessage(lobbyId: string, message: string): Observable<LobbyInterface> {
    return this.http.put<LobbyInterface>(`/game_lobbies/${lobbyId}/send_message`, { message: message});
  }

  initLobbyGame(lobbyId: string, args: any): Observable<LobbyInterface> {
    return this.http.put<LobbyInterface>(`/game_lobbies/${lobbyId}/init_game`, { args: args });
  }

  sendLobbyGameInstruction(lobbyId: string, instructions: any): Observable<LobbyInterface> {
    return this.http.put<LobbyInterface>(`/game_lobbies/${lobbyId}/next_step`, { args: instructions});
  }

  getLobbyStream(lobbyId: string): Observable<LobbyInterface> {
    const url = new URL(environment.mercureUrl);
    url.searchParams.append('topic', `${environment.apiUrl}/game_lobbies/${lobbyId}`);
    return new Observable<LobbyInterface>((observer) => {
      const eventSource = new EventSource(url);
      eventSource.onmessage = (event) => observer.next(JSON.parse(event.data) as LobbyInterface);
      eventSource.onerror = (error) => observer.error(error);
    })
  }
}
