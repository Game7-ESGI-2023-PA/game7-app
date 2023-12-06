import { APP_INITIALIZER, NgModule } from "@angular/core";
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { SharedModule } from './shared/shared.module';
import { PagesModule } from './pages/pages.module';
import { interceptors } from './api/interceptors';
import {
  BrowserAnimationsModule,
  NoopAnimationsModule,
} from '@angular/platform-browser/animations';
import { ApiUrlService } from "./shared/services/api-url.service";

export function initApiHost(apiUrlService: ApiUrlService) {
  return () => apiUrlService.loadAppConfig();
}

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    AppRoutingModule,
    AuthModule,
    SharedModule,
    PagesModule,
  ],
  providers: [
    interceptors,
    {
      provide: APP_INITIALIZER,
      useFactory: initApiHost,
      deps: [ApiUrlService],
      multi: true,
    },],
  bootstrap: [AppComponent],
})
export class AppModule {}
