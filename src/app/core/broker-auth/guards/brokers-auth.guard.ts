import {Injectable} from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
} from '@angular/router';

import {Observable, tap} from 'rxjs';

import {select, Store} from '@ngrx/store';
import {brokerIsLoggedIn} from '../store/broker-auth.selectors';
import {BrokerAuthStateInterface} from '../types/BrokerAuthState.interface';

@Injectable()
export class BrokersAuthGuard implements CanActivate {
  constructor(
    private store: Store<BrokerAuthStateInterface>,
    private route: Router
  ) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    return this.store.pipe(
      select(brokerIsLoggedIn),
      tap((brokerIsLoggedIn) => {
        if (!brokerIsLoggedIn) {
          console.log(brokerIsLoggedIn);
          this.route.navigateByUrl('/auth-broker');
        }
      })
    );
  }
}
