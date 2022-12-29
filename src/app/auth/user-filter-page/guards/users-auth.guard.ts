import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';

import { select, Store } from '@ngrx/store';
import { userIsLoggedIn } from '../../user-auth-page/store/userSelectors';

import { Observable, tap } from 'rxjs';
import { UserAuthStateInterface } from '../../../shared/models/interfaces/userAuthState.interface';

@Injectable()
export class UsersAuthGuard implements CanActivate {
  constructor(
    private readonly _store: Store<UserAuthStateInterface>,
    private _route: Router
  ) {}
  canActivate(
    _route: ActivatedRouteSnapshot,
    _state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return this._store.pipe(
      select(userIsLoggedIn),
      tap((userIsLoggedIn) => {
        if (!userIsLoggedIn) {
          this._route.navigateByUrl('/auth-user');
        } else if (!localStorage.getItem('accessToken')) {
          this._route.navigateByUrl('/auth-broker');
        }
      })
    );
  }
}
