import {Component} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, ValidatorFn, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {RegisterService} from "../shared/services/register.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  form: FormGroup;

  emailCheck = false;
  passwordCheck = false;
  confirmPasswordCheck = false;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private registerService :RegisterService) {
    this.form = this.fb.group({//TODO add lenght check
      email: ['', [Validators.required, Validators.email]],
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
  signUp() {
    if(this.form) {
      const val = this.form.value;
      if (val.email && val.password ) {
        this.registerService.signUp(val.email as string, val.password as string).subscribe(
          (requetResult: any) => {
            console.log("requetResult : " + requetResult); //TODO add redirection
          },
          (error:any) => {
            console.log(error)
          }
        );
      }
    }
  }




}
