import {Injectable} from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Router} from '@angular/router';
import {PersistenceService} from '../../pages/shared/services/persistence.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(
    public persistenceSesrvice: PersistenceService,
    private router: Router
  ) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    if (localStorage.getItem('accessToken')) {
      const token = localStorage.getItem('accessToken');
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${token?.split('"').join('')}`,
        },
      });
    }

    return next.handle(request);
  }
}
