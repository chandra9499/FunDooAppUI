import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthorizationInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    // debugger;
    const token = localStorage.getItem('token');
    request = request.clone({
      headers:request.headers.set('Authorization',`bearer ${token}`)
    });
    return next.handle(request);
  }
}




