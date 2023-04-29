import {Component, Input } from '@angular/core';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent {

  @Input() nickname: string | undefined;
  @Input() photoUrl: string | undefined;

  getPhotoUrl() {
    if(this.photoUrl !== undefined) {
      return this.photoUrl;
    }
    return '../../../assets/placeholders/no_player_image.jpg'
  }
}
