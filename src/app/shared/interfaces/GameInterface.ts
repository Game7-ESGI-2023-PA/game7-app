import { LobbyInterface } from './LobbyInterface';

export interface GameInterface {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  bgUrl: string;
  minPlayers: number;
  maxPlayers: number;
  lobbies: LobbyInterface[];
}
