import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../shared/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {

  errorMessage = "";
  form: FormGroup = this.fb.group({
    email: ['', [Validators.email, Validators.required]],
    password: ['', Validators.required],
  });

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {}

  login() {
    const val = this.form.value;
    if (val.email && val.password && !this.form.invalid) {
      this.authService
        .login({
          email: val.email,
          password: val.password,
        })
        .subscribe({
          next: () => {
            this.router.navigate(['/game-search']).then(); // TODO redirect to home
          },
          error: err => {
            if (err.error.code === 401) {
              this.errorMessage = "Veuillez vérifier vos identifiants."
            }
            if (err.error.code === 500) {
              this.router.navigate(['server-error']).then();
            }
          },
        });
    }
  }

  redirectToRegister() {
    this.router.navigate(['register']).then();
  }
}
