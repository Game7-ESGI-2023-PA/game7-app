import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable, tap } from 'rxjs';

import { Router } from '@angular/router';

@Injectable()
export class UnAuthorizedInterceptor implements HttpInterceptor {
  constructor(private router: Router) {}

  excludedUrls = ['/', '/login', '/register'];

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler,
  ): Observable<HttpEvent<unknown>> {
    return next.handle(request.clone()).pipe(
      tap({
        error: (err) => {
          if (err instanceof HttpErrorResponse) {
            if (
              err.status === 401 &&
              this.excludedUrls.indexOf(this.router.url) === -1
            ) {
              this.router.navigate(['/login']);
            }
          }
        },
      }),
    );
  }
}
