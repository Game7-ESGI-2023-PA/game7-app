import { UserInterface } from './UserInterface';

export interface FriendRequestInterface {
  id: string;
  from: UserInterface;
  to: UserInterface;
  status: Status;
}

export interface FriendsInterface {
  friends: UserInterface[];
}

export enum Status {
  Pending = 'pending',
  Accepted = 'accepted',
  Refused = 'refused',
}
