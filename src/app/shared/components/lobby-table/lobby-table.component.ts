import { Component, Input } from '@angular/core';
import { LobbyInterface } from '../../interfaces/LobbyInterface';

@Component({
  selector: 'app-lobby-table',
  templateUrl: './lobby-table.component.html',
  styleUrls: ['./lobby-table.component.css'],
})
export class LobbyTableComponent {
  @Input() lobbies: LobbyInterface[] | undefined = [];
  @Input() maxPlayers: number | undefined = undefined;

  redirectToLobby() {
    console.log('test');
  }
}
