import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  constructor( private router: Router) {
  }

  redirectToHome() {
    this.router.navigate(['/']);//TODO redirect to home
  }

  logout() {
    localStorage.removeItem("id_token");
    this.router.navigate(['/login']);
  }
}
