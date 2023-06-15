import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { LobbyInterface } from "../../shared/interfaces/LobbyInterface";
import { LobbyService } from "../../shared/services/lobby.service";

@Component({
  selector: 'app-lobby-detail',
  templateUrl: './lobby-detail.component.html',
  styleUrls: ['./lobby-detail.component.css']
})
export class LobbyDetailComponent implements OnInit {

  lobby: LobbyInterface | undefined = undefined;

  constructor(private activatedRoute: ActivatedRoute, private router: Router, private lobbyService: LobbyService) {}

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(params => {
      const lobbyId = params.get('id');
      if (lobbyId !== null) {
        this.setLobby(lobbyId);
      } else {
        this.router.navigate(['not-found']).then();
      }
    })
  }

  setLobby(id: string) {
    this.lobbyService.findById(id).subscribe({
      next: res => {
        this.lobby = res;
      },
      error: err => {
        console.log(err);
      }
    })
  }

}
