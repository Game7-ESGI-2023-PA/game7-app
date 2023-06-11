import { Component, Input } from '@angular/core';
import { GameInterface } from '../../interfaces/GameInterface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-game-card',
  templateUrl: './game-card.component.html',
  styleUrls: ['./game-card.component.css'],
})
export class GameCardComponent {
  constructor(private router: Router) {}

  @Input() game: GameInterface | undefined;

  goToGameDetail() {
    this.router.navigate(['game-detail', this.game?.id]);
  }
}
