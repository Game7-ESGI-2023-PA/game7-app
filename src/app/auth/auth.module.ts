import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import {ReactiveFormsModule} from "@angular/forms";
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from "@angular/material/input";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {MatGridListModule} from '@angular/material/grid-list';



@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent
  ],
  exports: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatGridListModule,
  ]
})
export class AuthModule { }
