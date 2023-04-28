import {Component} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, ValidatorFn, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  form: FormGroup = new FormGroup({});

  emailCheck = false;
  passwordCheck = false;
  confirmPasswordCheck = false;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private auth: AuthService,
  ) {}

  ngOnInit() {
    this.form = this.fb.group({//TODO add lenght check
      email: ['', [Validators.required, Validators.email]],
      nickname: ['', [Validators.required]],
      password: ['', [Validators.required]],
      confirmPassword: ['', [Validators.required, this.confirmationPassword()]]
    });
  }

  confirmationPassword(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      if (!this.form) {
        return null;
      }

      const password = this.form.get('password')?.value;
      const confirmPassword = control.value;

      return password === confirmPassword ? null : { mismatch: true };
    };
  }

  register() {
    if(this.form) {
      const val = this.form.value;
      if (val.email && val.password ) {
        this.auth.register({
          email: val.email as string,
          nickname: val.nickname as string,
          plainPassword: val.password as string
        }).subscribe({
          next: () => {
            this.router.navigate(['/login'])
          },
          error: (error) => {
            // TODO: error management
            console.log(error);
          }
        });
      }
    }
  }
}
