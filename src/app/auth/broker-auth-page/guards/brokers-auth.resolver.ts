import { Injectable } from '@angular/core';
import {
  Router,
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from '@angular/router';

import { Observable } from 'rxjs';

import { BrokerAuthService } from '../service/broker-auth.service';

import { CurrentBrokerInterface } from '../models/interfaces/current-broker.interface';

@Injectable({
  providedIn: 'root',
})
export class BrokersAuthResolver implements Resolve<CurrentBrokerInterface> {
  constructor(private _brokerAuthService: BrokerAuthService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<CurrentBrokerInterface> {
    return this._brokerAuthService.register({
      broker: {
        email: '',
        password: '',
      },
    });
  }
}
