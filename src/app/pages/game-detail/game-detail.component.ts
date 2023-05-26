import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GameInterface } from '../../shared/interfaces/GameInterface';
import { GameService } from '../../shared/services/game.service';

@Component({
  selector: 'app-game-detail',
  templateUrl: './game-detail.component.html',
  styleUrls: ['./game-detail.component.css'],
})
export class GameDetailComponent implements OnInit {
  game: GameInterface | undefined = undefined;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private gameService: GameService
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
        console.log(res);
        this.game = res;
      },
      error: err => {
        console.log(err);
      },
    });
  }

  goToCreateLobby() {
    this.router.navigate(['lobby-create', this.game?.id])
  }

  protected readonly undefined = undefined;
}
