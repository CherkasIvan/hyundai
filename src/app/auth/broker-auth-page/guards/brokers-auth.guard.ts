import { Injectable } from '@angular/core';
import { CanActivate, CanLoad, Router } from '@angular/router';

import { PersistenceService } from '../../../shared/services/persistence.service';

import { routingPathEnum } from '../../../shared/consts/routing-path-enum';
import { Observable } from 'rxjs';

@Injectable()
export class BrokersAuthGuard implements CanLoad {
  constructor(
    private _router: Router,
    private _persistenceService: PersistenceService
  ) {}
  public canLoad(): Observable<boolean> | boolean {
    if (this._persistenceService.getToken()) {
      return true;
    }
    this._router.navigateByUrl(`/${routingPathEnum.BrokerAuthentication}`);
    return false;
  }
}
