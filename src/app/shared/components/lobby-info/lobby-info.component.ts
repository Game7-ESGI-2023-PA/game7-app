import { Component, Input } from "@angular/core";
import { LobbyInterface } from "../../interfaces/LobbyInterface";

@Component({
  selector: 'app-lobby-info',
  templateUrl: './lobby-info.component.html',
  styleUrls: ['./lobby-info.component.css']
})
export class LobbyInfoComponent {
  @Input() lobby: LobbyInterface | undefined = undefined;
  getNonMasterPlayers() {
    return this.lobby?.players.filter((player) => player.id !== this.lobby?.master.id)
  }

  protected readonly length = length;
}
