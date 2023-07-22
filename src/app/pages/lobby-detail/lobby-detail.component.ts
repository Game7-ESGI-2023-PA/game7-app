import { ChangeDetectorRef, Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { LobbyInterface } from "../../shared/interfaces/LobbyInterface";
import { LobbyService } from "../../shared/services/lobby.service";
import { UserService } from "../../shared/services/user.service";
import { UserInterface } from "../../shared/interfaces/UserInterface";

@Component({
  selector: 'app-lobby-detail',
  templateUrl: './lobby-detail.component.html',
  styleUrls: ['./lobby-detail.component.css']
})
export class LobbyDetailComponent implements OnInit {

  lobby: LobbyInterface | undefined = undefined;
  currentUser: UserInterface | undefined = undefined;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private lobbyService: LobbyService,
    private userService: UserService,
    private changeDetectorRef: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(params => {
      const lobbyId = params.get('id');
      if (lobbyId !== null) {
        // TODO: secure -> only retrieve if the lobby is joined
        this.setLobby(lobbyId);
        this.initLobbyEventSourcing(lobbyId);
      } else {
        this.router.navigate(['not-found']).then();
      }
    })
    this.userService.me().subscribe((currentUser) => {this.currentUser = currentUser})
  }

  setLobby(id: string) {
    this.lobbyService.findById(id).subscribe({
      next: res => {
        this.lobby = res;
        console.log(this.lobby.lobbyGamingData)
      },
      error: err => {
        console.log(err);
      }
    })
  }

  initLobbyEventSourcing(lobbyId: string) {
    this.lobbyService.getLobbyStream(lobbyId).subscribe({
      next: res => {
        this.lobby = res;
        console.log(res);
        this.changeDetectorRef.detectChanges();
      }
    })
  }

  joinLobby() {
    if (this.lobby?.id && this.canJoin()) {
      this.lobbyService.joinLobby(this.lobby?.id).subscribe()
    }
  }

  canJoin() {
    if(this.lobby?.players.some((player) => player.id === this.currentUser?.id)) {
      return false;
    }
    return this.lobby?.game.maxPlayers !== this.lobby?.players.length;
  }

  isGameMaster() {
    return this.currentUser?.id === this.lobby?.master.id
  }

  isJoined(): boolean {
    return !!this.lobby?.players.some((player) => player.id === this.currentUser?.id);
  }

  getMyPlayerNumber(): number {
    const number = this.lobby?.players
      ?.findIndex((player) => player?.id === this.currentUser?.id)
    if(number !== undefined) {
      return number + 1
    }
    return 0
  }

  startGame(event: any) {
    if(this.lobby?.id) {
      this.lobbyService.initLobbyGame(this.lobby?.id, event).subscribe()
    }
  }

  sendInstruction(event: any) {
    console.log(event);
    if(this.lobby?.id) {
      this.lobbyService.sendLobbyGameInstruction(this.lobby?.id, event).subscribe(
        {
          next: (res) => {
            console.log(res);
          },
          error: (err) => {
            console.log(err);
          }
        }
      );
    }
  }
}

