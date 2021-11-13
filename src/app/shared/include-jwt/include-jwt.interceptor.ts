import {Injectable} from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()
export class IncludeJwtInterceptor implements HttpInterceptor {

  constructor() {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    //const idToken = localStorage.getItem('jwt');
    const idToken = 'PBajNQ5RZH3145SN0Fwf-rs_9fAlrX9trEsjApOW9MFeCzwAaNPoxUrjSU2krraH';

    if (idToken) {
      const cloned = request.clone({
        headers: request.headers.set('Authorization',
          'Bearer ' + idToken)
      });
      return next.handle(cloned);
    } else {
      return next.handle(request);
    }
  }
}
