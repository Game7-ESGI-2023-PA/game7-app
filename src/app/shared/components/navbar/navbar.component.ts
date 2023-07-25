import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { UserService } from '../../services/user.service';
import { UserInterface } from '../../interfaces/UserInterface';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  @Input() photoUrl: string | undefined;
  currentUser: UserInterface | undefined;

  constructor(private router: Router, private userService: UserService) {}

  ngOnInit(): void {
    this.userService.me().subscribe({
      next: (res) => {
        this.currentUser = res;
      }
    })
  }

  redirectToHome() {
    this.router.navigate(['/user-profile']);
  }

  redirectToUserSearch() {
    this.router.navigate(['/user-search']);
  }

  redirectToGameSearch() {
    this.router.navigate(['']);
  }

  logout() {
    AuthService.logout();
    this.router.navigate(['/login']);
  }
}
