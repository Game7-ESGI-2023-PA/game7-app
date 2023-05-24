import {Component, Input} from '@angular/core';
import {GameInterface} from "../../interfaces/GameInterface";

@Component({
  selector: 'app-game-card',
  templateUrl: './game-card.component.html',
  styleUrls: ['./game-card.component.css']
})
export class GameCardComponent {

  @Input() game: GameInterface | undefined;

}
