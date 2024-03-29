import { Component, Input } from '@angular/core';
import { UserInterface } from '../../interfaces/UserInterface';
import { Router } from '@angular/router';
import { ButtonColor } from '../button/button.component';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css'],
})
export class UserCardComponent {
  public constructor(private router: Router) {}

  @Input() user: UserInterface | undefined = undefined;

  getPhotoUrl() {
    if (this.user?.photoUrl !== undefined) {
      return this.user?.photoUrl;
    }
    return '../../../assets/placeholders/no_player_image.jpg';
  }

  goToUserProfile() {
    if (this.user?.id) {
      this.router.navigate(['user-profile', this.user?.id]).then();
    }
  }

  protected readonly ButtonColor = ButtonColor;
}
