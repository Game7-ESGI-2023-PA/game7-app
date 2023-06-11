import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FriendRequestInterface, FriendsInterface } from '../interfaces/FriendshipInterface';

@Injectable({
  providedIn: 'root',
})
export class FriendsService {
  constructor(private http: HttpClient) {}

  mySentFriendRequest() {
    return this.http.get<FriendRequestInterface[]>('/me/sent/friend_requests');
  }

  myReceivedFriendRequest() {
    return this.http.get<FriendRequestInterface[]>('/me/received/friend_requests');
  }

  myFriends() {
    return this.http.get<FriendsInterface>('/me/friendship');
  }

  askForFriend(to: string) {
    return this.http.post<FriendRequestInterface>('/friend_requests', {
      to: `/api/users/${to}`,
    });
  }

  answerRequest(requestId: string, status: string) {
    return this.http.put<FriendRequestInterface>(`/friend_requests/${requestId}/answer/`, {
      status: status,
    });
  }
}
