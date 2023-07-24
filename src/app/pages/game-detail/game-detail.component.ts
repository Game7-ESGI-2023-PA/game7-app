import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GameInterface } from '../../shared/interfaces/GameInterface';
import { GameService } from '../../shared/services/game.service';
import { LobbyService } from 'src/app/shared/services/lobby.service';

@Component({
  selector: 'app-game-detail',
  templateUrl: './game-detail.component.html',
  styleUrls: ['./game-detail.component.css'],
})
export class GameDetailComponent implements OnInit {
  game: GameInterface | undefined = undefined;
  isPublic = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private gameService: GameService,
    private lobbyService: LobbyService,
  ) {}

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(params => {
      const gameId = params.get('id');
      if (gameId !== null) {
        this.setGame(gameId);
      } else {
        this.router.navigate(['not-found']).then();
      }
    });
  }

  setGame(gameId: string) {
    this.gameService.findById(gameId).subscribe({
      next: res => {
        this.game = res;
      },
      error: err => {
        console.log(err);
      },
    });
  }

  toggleCheckbox() {
    this.isPublic = !this.isPublic;
  }

  createLobby() {
    if (this.game?.id) {
      this.lobbyService.create(this.game?.id, this.isPublic).subscribe(res => {
        if(res && res.id) {
          this.router.navigate(['lobby-detail', res.id]).then()
        }
      });
    }
  }

}
