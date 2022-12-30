import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
} from '@angular/router';

import { select, Store } from '@ngrx/store';
import { userIsLoggedIn } from '../store/userSelectors';

import { Observable, tap } from 'rxjs';

import { PersistenceService } from '../../../shared/services/persistence.service';

import { UserAuthStateInterface } from '../../../shared/models/interfaces/userAuthState.interface';

@Injectable()
export class UserAuthGuard implements CanActivate {
  constructor(
    private store: Store<UserAuthStateInterface>,
    private route: Router,
    private persistenceService: PersistenceService
  ) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    return this.store.pipe(
      select(userIsLoggedIn),
      tap((isLogged) => {
        console.log(isLogged);
        if (!isLogged) {
          this.route.navigateByUrl('/');
        }
      })
    );
  }
}
