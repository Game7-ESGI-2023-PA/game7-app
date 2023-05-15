import {Component, OnInit} from '@angular/core';
import {UserInterface} from "../../shared/interfaces/UserInterface";

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent  implements OnInit {

  friends :UserInterface[] = [];
  /* = [
   {
      id: '1234',
      nickname: 'user1',
      email: 'user1@example.com',
      photoUrl: 'assets/placeholders/no_player_image.jpg'
    },
    {
      id: '5678',
      nickname: 'user2',
      email: 'user2@example.com',
      photoUrl: 'assets/placeholders/no_player_image.jpg'
    },
    {
      id: '9012',
      nickname: 'user3',
      email: 'user3@example.com',
      photoUrl: 'assets/placeholders/no_player_image.jpg'
    },
    {
      id: '3456',
      nickname: 'user4',
      email: 'user4@example.com',
      photoUrl: 'assets/placeholders/no_player_image.jpg'
    },
    {
      id: '7890',
      nickname: 'user5',
      email: 'user5@example.com',
      photoUrl: 'assets/placeholders/no_player_image.jpg'
    },
    {
      id: '2468',
      nickname: 'user6',
      email: 'user6@example.com',
      photoUrl: 'assets/placeholders/no_player_image.jpg'
    },
    {
      id: '1357',
      nickname: 'user7',
      email: 'user7@example.com',
      photoUrl: 'assets/placeholders/no_player_image.jpg'
    },
    {
      id: '3690',
      nickname: 'user8',
      email: 'user8@example.com',
      photoUrl: 'assets/placeholders/no_player_image.jpg'
    },
    {
      id: '2584',
      nickname: 'user9',
      email: 'user9@example.com',
      photoUrl: 'assets/placeholders/no_player_image.jpg'
    },
    {
      id: '9753',
      nickname: 'user10',
      email: 'user10@example.com',
      photoUrl: 'assets/placeholders/no_player_image.jpg'
    }
  ];*/

  users = [
    {
      id: '1234',
      nickname: 'user1',
      email: 'user1@example.com',
      photoUrl: 'assets/placeholders/no_player_image.jpg'
    },
    {
      id: '5678',
      nickname: 'user2',
      email: 'user2@example.com',
      photoUrl: 'assets/placeholders/no_player_image.jpg'
    },
    {
      id: '9012',
      nickname: 'user3',
      email: 'user3@example.com',
      photoUrl: 'assets/placeholders/no_player_image.jpg'
    },
    {
      id: '3456',
      nickname: 'user4',
      email: 'user4@example.com',
      photoUrl: 'assets/placeholders/no_player_image.jpg'
    },
    {
      id: '7890',
      nickname: 'user5',
      email: 'user5@example.com',
      photoUrl: 'assets/placeholders/no_player_image.jpg'
    },
    {
      id: '2468',
      nickname: 'user6',
      email: 'user6@example.com',
      photoUrl: 'assets/placeholders/no_player_image.jpg'
    },
    {
      id: '1357',
      nickname: 'user7',
      email: 'user7@example.com',
      photoUrl: 'assets/placeholders/no_player_image.jpg'
    },
    {
      id: '3690',
      nickname: 'user8',
      email: 'user8@example.com',
      photoUrl: 'assets/placeholders/no_player_image.jpg'
    },
    {
      id: '2584',
      nickname: 'user9',
      email: 'user9@example.com',
      photoUrl: 'assets/placeholders/no_player_image.jpg'
    },
    {
      id: '9753',
      nickname: 'user10',
      email: 'user10@example.com',
      photoUrl: 'assets/placeholders/no_player_image.jpg'
    }
  ];

  ngOnInit(): void {

    if(this.friends.length  <= 0) {
      this.friends  = [
        {
          id: 'none',
          nickname: 'none',
          email: 'none',
          photoUrl: 'assets/placeholders/no_player_image.jpg'
        }
      ];
    }

    if(this.users.length  <= 0) {
      this.users  = [
        {
          id: 'none',
          nickname: 'none',
          email: 'none',
          photoUrl: 'assets/placeholders/no_player_image.jpg'
        }
      ];
    }

  }

}
