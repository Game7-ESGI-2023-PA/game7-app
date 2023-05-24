import { Component } from '@angular/core';
import { Router } from "@angular/router";
import { ButtonColor } from "../../shared/components/button/button.component";

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent {

  constructor(private router: Router) {
  }

  login() {
    this.router.navigate(['login']).then();
  }

  register() {
    this.router.navigate(['register']).then();
  }

  protected readonly ButtonColor = ButtonColor;
}
