import { Component, OnInit } from '@angular/core';
import { UserInterface } from 'src/app/shared/interfaces/UserInterface';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-list-friends-game',
  templateUrl: './list-friends-game.component.html',
  styleUrls: ['./list-friends-game.component.css']
})
export class ListFriendsGameComponent implements OnInit {

  searchResults: UserInterface[] = [];

  constructor(
    private userService: UserService
  ){}

  ngOnInit(): void {
    this.searchRequest("");
  }

  searchRequest(query: string) {
    this.userService.search(query).subscribe({
      next: (results) => {
        this.searchResults = results;
      }
    })
  }

}
