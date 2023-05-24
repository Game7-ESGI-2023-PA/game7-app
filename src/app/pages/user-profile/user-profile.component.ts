import { Component, OnInit } from '@angular/core';
import { UserInterface } from '../../shared/interfaces/UserInterface';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/shared/services/user.service';
import { FriendRequestInterface, Status } from 'src/app/shared/interfaces/FriendshipInterface';
import { FriendsService } from 'src/app/shared/services/friends.service';
import { combineLatest } from 'rxjs';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css'],
})
export class UserProfileComponent implements OnInit {
  user: UserInterface | undefined = undefined;
  myFriends: UserInterface[] | undefined = undefined;
  sentFriendRequests: FriendRequestInterface[] | undefined = undefined;
  receivedFriendRequests: FriendRequestInterface[] | undefined = undefined;

  isCurrentUser = false;
  friendShipStatus: FriendShipStatus = 0;

  public constructor(
    private route: ActivatedRoute,
    private userService: UserService,
    private friendsService: FriendsService
  ) {}

  ngOnInit(): void {
    this.isCurrentUser = false;
    this.route.paramMap.subscribe(params => {
      combineLatest({
        sentRequest: this.friendsService.mySentFriendRequest(),
        receivedRequest: this.friendsService.myReceivedFriendRequest(),
        friends: this.friendsService.myFriends(),
        me: this.userService.me(),
      }).subscribe(res => {
        console.log(res);
        (this.sentFriendRequests = res.sentRequest),
          (this.receivedFriendRequests = res.receivedRequest),
          (this.myFriends = res.friends.friends);

        const userId = params.get('id');

        if (userId === null || userId === res.me.id) {
          this.user = res.me;
          this.isCurrentUser = true;
        }

        // If not my profile, set friendship status and user info from Id
        if (!this.isCurrentUser && userId) {
          this.userService.findById(userId).subscribe(user => {
            this.user = user;
          });
          if (this.myFriends?.some(friend => friend.id === userId)) {
            this.friendShipStatus = FriendShipStatus.AlreadyFriends;
          }
          if (
            this.receivedFriendRequests !== undefined &&
            this.receivedFriendRequests?.some(fr => fr.from.id === userId)
          ) {
            this.friendShipStatus = FriendShipStatus.RequestPending;
          } else if (
            this.sentFriendRequests !== undefined &&
            this.sentFriendRequests?.some(fr => fr.to.id === userId)
          ) {
            this.friendShipStatus = FriendShipStatus.RequestSent;
          }
        }
      });
    });
  }

  askForFriend() {
    if (!this.isCurrentUser && this.user) {
      this.friendsService.askForFriend(this.user?.id).subscribe(fr => {
        this.sentFriendRequests?.push(fr);
        this.friendShipStatus = FriendShipStatus.RequestSent;
      });
    }
  }

  acceptRequest() {
    if (!this.isCurrentUser && this.user) {
      const request = this.receivedFriendRequests?.find(fr => fr.from.id === this.user?.id);
      if (request) {
        this.friendsService.answerRequest(request?.id, Status.Accepted).subscribe(() => {
          this.friendShipStatus = FriendShipStatus.AlreadyFriends;
        });
      }
    }
  }

  denieRequest() {
    if (!this.isCurrentUser && this.user) {
      const request = this.receivedFriendRequests?.find(fr => fr.from.id === this.user?.id);
      if (request) {
        this.friendsService.answerRequest(request?.id, Status.Refused).subscribe(() => {
          this.friendShipStatus = FriendShipStatus.NoFriendShip;
        });
      }
    }
  }
}

enum FriendShipStatus {
  NoFriendShip = 0,
  AlreadyFriends = 1,
  RequestPending = 2,
  RequestSent = 3,
}
