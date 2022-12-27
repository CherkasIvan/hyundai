import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';

import { select, Store } from '@ngrx/store';
import { userIsLoggedIn } from '../../auth/user-auth-page/store/userSelectors';

import { Observable, tap } from 'rxjs';

import { UserAuthStateInterface } from '../../auth/user-auth-page/types/userAuthState.interface';

@Injectable()
export class UsersAuthGuard implements CanActivate {
  constructor(
    private store: Store<UserAuthStateInterface>,
    private route: Router
  ) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return this.store.pipe(
      select(userIsLoggedIn),
      tap((userIsLoggedIn) => {
        if (!userIsLoggedIn) {
          this.route.navigateByUrl('/auth-user');
        } else if (!localStorage.getItem('accessToken')) {
          this.route.navigateByUrl('/auth-broker');
        }
      })
    );
  }
}
