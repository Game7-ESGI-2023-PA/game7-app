import { Component, Input } from "@angular/core";
import { LobbyInterface } from "../../../shared/interfaces/LobbyInterface";
import { UserInterface } from "../../../shared/interfaces/UserInterface";
import { LobbyService } from "../../../shared/services/lobby.service";

@Component({
  selector: 'app-lobby-info',
  templateUrl: './lobby-info.component.html',
  styleUrls: ['./lobby-info.component.css']
})
export class LobbyInfoComponent {
  @Input() lobby: LobbyInterface | undefined = undefined;
  @Input() currentUser: UserInterface | undefined = undefined;


  constructor(private lobbyService: LobbyService) {
  }

  getNonMasterPlayers() {
    if(this.lobby?.players) {
      return this.lobby?.players.filter((player) => player.id !== this.lobby?.master.id)
    }
    return [];
  }

  sendMessage(event: string) {
    if(this.lobby?.id){
      this.lobbyService.sendMessage(this.lobby.id, event).subscribe();
    }
  }
}
