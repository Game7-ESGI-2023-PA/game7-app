import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-game-card',
  templateUrl: './game-card.component.html',
  styleUrls: ['./game-card.component.css']
})
export class GameCardComponent {

  @Input() gameName: string | undefined;
  @Input() gameImage: string | undefined;
  @Input() gameDesc : string | undefined;

}
