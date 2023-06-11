import { GameInterface } from './GameInterface';
import { UserInterface } from './UserInterface';

export interface LobbyInterface {
  id: string;
  game: GameInterface;
  players: UserInterface[];
  master: UserInterface;
  status: string;
}
