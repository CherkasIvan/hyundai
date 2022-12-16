import {Injectable} from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import {Router} from '@angular/router';

import {Observable} from 'rxjs';

import {PersistenceService} from '../../../pages/shared/services/persistence.service';

@Injectable()
export class BrokerTokenInterceptor implements HttpInterceptor {
  constructor(
    public persistenceSesrvice: PersistenceService,
    private router: Router
  ) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const token = this.persistenceSesrvice.getToken();

    if (token) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`,
        },
      });
    }

    return next.handle(request);
  }
}
