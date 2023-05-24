import {Component, OnInit} from '@angular/core';
import {GameInterface} from "../../shared/interfaces/GameInterface";
import {GameService} from "../../shared/services/game.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-game-search',
  templateUrl: './game-search.component.html',
  styleUrls: ['./game-search.component.css']
})
export class GameSearchComponent implements OnInit {

  searchResults: GameInterface[] = [];

  constructor(
    private gameService: GameService,
    private router: Router,
  ){}

  ngOnInit(): void {
    this.searchRequest("");
  }

  onSearch(input: string) {
    this.searchRequest(input);
  }

  searchRequest(query: string) {
    this.gameService.search(query).subscribe({
      next: (results) => {
        this.searchResults = results;
      }
    })
  }
}
