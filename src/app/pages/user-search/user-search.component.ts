import { Component } from '@angular/core';
import { UserInterface, UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-user-search',
  templateUrl: './user-search.component.html',
  styleUrls: ['./user-search.component.css']
})
export class UserSearchComponent {

  searchResults: UserInterface[] = [];

  constructor(
    private userService: UserService
  ) {}

  search(input: string) {
    this.userService.search(input).subscribe({
      next: (results) => {
        this.searchResults = results;
        console.log(results);
      }
    })
  }

}
