import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-friend-card',
  templateUrl: './friend-card.component.html',
  styleUrls: ['./friend-card.component.css']
})
export class FriendCardComponent {

  @Input() nickname: string | undefined;
  @Input() photoUrl: string | undefined;

  getPhotoUrl() {
    if(this.photoUrl !== undefined) {
      return this.photoUrl;
    }
    return '../../../assets/placeholders/no_player_image.jpg'
  }
  startChat() {
    console.log("startChat");
    //TODO implement chat
  }

}
