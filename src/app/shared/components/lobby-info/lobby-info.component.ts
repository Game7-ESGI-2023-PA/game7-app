import { Component, Input } from "@angular/core";
import { LobbyInterface } from "../../interfaces/LobbyInterface";
import { UserInterface } from "../../interfaces/UserInterface";

@Component({
  selector: 'app-lobby-info',
  templateUrl: './lobby-info.component.html',
  styleUrls: ['./lobby-info.component.css']
})
export class LobbyInfoComponent {
  @Input() lobby: LobbyInterface | undefined = undefined;
  @Input() currentUser: UserInterface | undefined = undefined;

  getNonMasterPlayers() {
    return this.lobby?.players.filter((player) => player.id !== this.lobby?.master.id)
  }

  canJoin() {
    if(this.lobby?.players.some((player) => player.id === this.currentUser?.id)) {
      return false;
    }
    return this.lobby?.game.maxPlayers !== this.lobby?.players.length;
  }
}
