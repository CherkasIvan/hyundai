import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';

import { Observable, tap } from 'rxjs';

import { select, Store } from '@ngrx/store';

import { brokerIsLoggedIn } from '../store/broker-auth.selectors';

import { BrokerAuthStateInterface } from '../types/broker-auth-state.interface';

@Injectable()
export class BrokersAuthGuard implements CanActivate {
  constructor(
    private readonly _store: Store<BrokerAuthStateInterface>,
    private _route: Router
  ) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return this._store.pipe(
      select(brokerIsLoggedIn),
      tap((brokerIsLoggedIn) => {
        if (!localStorage.getItem('successToken')) {
          this._route.navigateByUrl('/auth-broker');
        }
      })
    );
  }
}
