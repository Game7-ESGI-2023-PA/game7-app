import { Component, Input, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent  implements OnInit  {

  @Input() photoUrl: string | undefined;

  constructor( private router: Router) {
  }

  ngOnInit(): void {

    this.getPhotoUrl();

  }

  redirectToHome() {
    this.router.navigate(['/user-profile']);
  }

  redirectToUsearSearch() {
    this.router.navigate(['/user-search']);
  }

  logout() {
    localStorage.removeItem("id_token");
    this.router.navigate(['/login']);
  }

  getPhotoUrl() {
    if(this.photoUrl !== undefined) {
      return this.photoUrl;
    }
    return '../../../assets/placeholders/no_player_image.jpg'
  }
}
