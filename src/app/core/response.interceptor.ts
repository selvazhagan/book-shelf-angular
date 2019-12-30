import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpResponse,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';

@Injectable()
export class ResponseInterceptors implements HttpInterceptor {
  constructor() {}
  intercept(request: HttpRequest<any>, next: HttpHandler) {
    return next.handle(request).pipe(
      tap(response => {
        if (response instanceof HttpResponse) {
          response.clone({
            headers: response.headers.set('Access-Control-Allow-Origin', '*'),
          });
        }
      }),
    );
  }
}
