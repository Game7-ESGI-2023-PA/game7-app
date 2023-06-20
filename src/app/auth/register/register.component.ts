import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  errorMessage = "";
  form: FormGroup = new FormGroup({});

  emailCheck = false;
  passwordCheck = false;
  confirmPasswordCheck = false;

  constructor(private fb: FormBuilder, private router: Router, private auth: AuthService) {}

  ngOnInit() {
    this.form = this.fb.group({
      //TODO add lenght check
      email: ['', [Validators.required, Validators.email]],
      nickname: ['', [Validators.required]],
      password: ['', [Validators.required]],
      confirmPassword: ['', [Validators.required, this.confirmationPassword()]],
    });
  }

  confirmationPassword(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      if (!control.parent || !control.parent.get('password')) {
        // If the parent form or the password control is not available, don't perform validation
        return null;
      }

      const password = control.parent.get('password')?.value;
      const confirmPassword = control.value;

      if (password !== confirmPassword) {
        // If the passwords don't match, return a validation error
        return { passwordMismatch: true };
      }

      // If the passwords match, the validation is successful
      return null;
    };
  }

  register() {
    if (this.form) {
      const val = this.form.value;
      if (val.email && val.password) {
        this.auth
          .register({
            email: val.email as string,
            nickname: val.nickname as string,
            plainPassword: val.password as string,
          })
          .subscribe({
            next: () => {
              this.router.navigate(['/login']).then();
            },
            error: error => {
              this.errorMessage = "Ces identifiants sont déjà utilisés.";
            },
          });
      }
    }
  }

  redirectToLogin() {
    this.router.navigate(['login']);
  }
}
