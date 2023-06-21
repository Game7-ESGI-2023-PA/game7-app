import { Component, Input } from '@angular/core';
import { LobbyInterface } from '../../../shared/interfaces/LobbyInterface';
import { Router } from "@angular/router";

@Component({
  selector: 'app-lobby-table',
  templateUrl: './lobby-table.component.html',
  styleUrls: ['./lobby-table.component.css'],
})
export class LobbyTableComponent {
  @Input() lobbies: LobbyInterface[] | undefined = [];
  @Input() maxPlayers: number | undefined = undefined;

  constructor(private router: Router) {}


  redirectToLobby(id: string) {
    this.router.navigate(['lobby-detail', id]).then();
  }
}
