import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable, tap } from 'rxjs';
import { userIsLoggedIn } from '../../pages/user-auth/store/userSelectors';
import { UserAuthStateInterface } from '../../pages/user-auth/types/userAuthState.interface';

@Injectable()
export class UsersAuthGuard implements CanActivate {
  constructor(
    private store: Store<UserAuthStateInterface>,
    private route: Router
  ) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
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
