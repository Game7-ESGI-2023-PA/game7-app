import { GameInterface } from './GameInterface';
import { UserInterface } from './UserInterface';
import { MessageInterface } from "./Message";

export interface LobbyInterface {
  id: string;
  game: GameInterface;
  players: UserInterface[];
  master: UserInterface;
  status: string;
  messages?: MessageInterface[];
}
