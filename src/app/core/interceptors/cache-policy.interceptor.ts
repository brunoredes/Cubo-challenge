import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class CachePolicyInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (req.url.endsWith('.js') || req.url.endsWith('.css')) {
      const modifiedRequest = req.clone({
        headers: req.headers.set('Cache-Control', 'max-age=31536000')
      });
      return next.handle(modifiedRequest);
    } else {
      return next.handle(req);
    }
  }
}
