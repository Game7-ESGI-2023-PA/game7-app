import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { LobbyInterface } from 'src/app/shared/interfaces/LobbyInterface';
import { LobbyService } from 'src/app/shared/services/lobby.service';

@Component({
  selector: 'app-user-lobbies-list',
  templateUrl: './user-lobbies-list.component.html',
  styleUrls: ['./user-lobbies-list.component.css']
})
export class UserLobbiesListComponent implements OnChanges {
  @Input() userId: string | undefined = undefined;
  lobbies: LobbyInterface[] = [];

  constructor(private lobbyService: LobbyService, private router: Router) {
  }
  ngOnChanges(changes: SimpleChanges): void {
    if(changes['userId']) {
      this.getUserLobbies();
    }
  }

  redirectToLobby(id: string) {
    this.router.navigate(['lobby-detail', id]).then();
  }

  getDateString(data: string) {
    const date = new Date(data);
    return date.toLocaleString('fr-FR');
  }

  getUserLobbies() {
    if(this.userId) {
      this.lobbyService.findByUserId(this.userId).subscribe({
        next: (res) => {
          this.lobbies = res;
        },
        error: (error) => {
          console.log(error);
        }
      })
    }
  }

}
