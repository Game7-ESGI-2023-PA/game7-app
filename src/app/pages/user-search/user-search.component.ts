import { Component, OnInit } from '@angular/core';
import { UserInterface } from 'src/app/shared/interfaces/UserInterface';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-user-search',
  templateUrl: './user-search.component.html',
  styleUrls: ['./user-search.component.css'],
})
export class UserSearchComponent implements OnInit {
  searchResults: UserInterface[] = [];

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.searchRequest('');
  }

  onSearch(input: string) {
    this.searchRequest(input);
  }

  searchRequest(query: string) {
    this.userService.search(query).subscribe({
      next: results => {
        this.searchResults = results;
      },
    });
  }
}
