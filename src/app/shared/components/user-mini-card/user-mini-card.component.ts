import { Component, Input } from '@angular/core';
import { UserInterface } from '../../interfaces/UserInterface';

@Component({
  selector: 'app-user-mini-card',
  templateUrl: './user-mini-card.component.html',
  styleUrls: ['./user-mini-card.component.css']
})
export class UserMiniCardComponent {

  @Input()
  player!:UserInterface;


}
