import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {AuthService} from "../../shared/services/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {
  form: FormGroup = new FormGroup({});;

  constructor(private fb:FormBuilder,
              private authService: AuthService,
              private router: Router) {

  }

  ngOnInit() {
    this.form = this.fb.group({
      email: ['',Validators.required],
      password: ['',Validators.required]
    });
  }


  login() {
     const val = this.form.value;
     if (val.email && val.password) {
       this.authService.login({
        email: val.email,
        password: val.password
       })
         .subscribe({
            next: () => {
              this.router.navigate(['/']); // TODO redirect to home
            },
            error: (err) => {
              console.log(err); // TODO error management
            }
         });
     }
   }

}
