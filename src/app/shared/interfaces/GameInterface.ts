import { LobbyInterface } from './LobbyInterface';
import { FormField } from "./InitGameInterface";

export interface GameInterface {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  bgUrl: string;
  minPlayers: number;
  maxPlayers: number;
  lobbies: LobbyInterface[];
  args?: FormField[];
}
