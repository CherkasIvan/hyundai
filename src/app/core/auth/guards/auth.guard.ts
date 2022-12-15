import {Injectable} from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import {select, Store} from '@ngrx/store';

import {Observable, tap} from 'rxjs';
import {PersistenceService} from 'src/app/pages/shared/services/persistence.service';

import {AuthStateInterface} from '../types/authState.interface';
import {isLoggedIn} from '../store/auth.selectors';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private store: Store<AuthStateInterface>,
    private route: Router,
    private persistenceService: PersistenceService
  ) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    return this.store.pipe(
      select(isLoggedIn),
      tap((isLogged) => {
        console.log(isLogged);
        if (!isLogged) {
          this.route.navigateByUrl('/');
        }
      })
    );
  }
}
