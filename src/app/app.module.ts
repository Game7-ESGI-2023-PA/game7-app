import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { AuthModule } from "./auth/auth.module";
import { SharedModule } from './shared/shared.module';
import { PagesModule } from './pages/pages.module';
import { interceptors } from './api/interceptors';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    AuthModule,
    SharedModule,
    PagesModule,
  ],
  providers: [interceptors],
  bootstrap: [AppComponent]
})
export class AppModule { }
