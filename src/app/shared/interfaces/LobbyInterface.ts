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
  lobbyGamingData?: LobbyGamingData;
}

export interface LobbyGamingData {
  gameInitArgs?: any;
  gameInstructions?: Array<any>;
  gameState?: Array<any>;
}


export interface SvgElement {
  tag: string;
  [key: string]: any;
}
