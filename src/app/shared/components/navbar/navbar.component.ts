import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  @Input() photoUrl: string | undefined;

  constructor(private router: Router) {}

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
