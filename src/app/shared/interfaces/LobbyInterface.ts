import { GameInterface } from './GameInterface';
import { UserInterface } from './UserInterface';
import { MessageInterface } from "./Message";

export interface LobbyInterface {
  id: string;
  game: GameInterface;
  players: UserInterface[];
  master: UserInterface;
  status: string;
  createdAt: string;
  updatedAt: string;
  messages?: MessageInterface[];
  lobbyGamingData?: LobbyGamingData;
}

export interface LobbyGamingData {
  gameInitArgs?: never;
  gameInstructions?: Array<never>;
  gameState?: Array<GameInfo | GameError>; // TODO: rename gameState from Api
}

export interface GameInfo {
  displays: Array<GameDisplay>;
  requested_actions: Array<GameInstruction>;
  game_state: GameState;
}

export interface GameDisplay {
  player: number;
  width: string;
  height: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  content: Array<any>;
}

export interface GameInstruction {
  type: string;
  player: number;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  buttons?: Array<any>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  zones?: Array<any>;
  keys?: Array<string>;
  regex?: string;
  max_length?: number;
  confirm?: boolean;
}

export interface GameError {
  errors: Array<InitErrorType | GameErrorType>;
}

export interface GameErrorType {
  type: string;
  player: string;
  requested_action: GameInstruction;
}

export interface InitErrorType {
  type?: string;
  arg?: string;
  argname?: string;
  value?: string;
}

export interface GameState {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  scores: Array<any>;
  game_over: boolean;
}

export interface SvgElement {
  tag: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
}
