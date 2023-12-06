import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';

import { ApiUrlService } from "../shared/services/api-url.service";

@Injectable({
  providedIn: 'root',
})
export class BaseUrlInterceptor implements HttpInterceptor {

  constructor(private apiUrlService: ApiUrlService) {
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(
      request.clone({
        url: request.url.startsWith('http') || request.url.endsWith('env.json') ? request.url : this.apiUrlService.getApiUrl() + request.url,
      })
    );
  }
}
