import { Injectable } from '@angular/core';
import { CanLoad, Router } from '@angular/router';

import { Observable } from 'rxjs';
import { routingPathEnum } from 'src/app/shared/consts/routing-path-enum';

import { PersistenceService } from '../../../shared/services/persistence.service';

@Injectable()
export class ClientAuthGuard implements CanLoad {
  constructor(
    private _router: Router,
    private _persistenceService: PersistenceService
  ) {}
  public canLoad(): Observable<boolean> | boolean {
    if (
      this._persistenceService.getToken() &&
      this._persistenceService.getClientId()
    ) {
      return true;
    } else if (
      !this._persistenceService.getToken() &&
      this._persistenceService.getClientId()
    ) {
      this._router.navigateByUrl(`/${routingPathEnum.BrokerAuthentication}`);
      return false;
    } else {
      this._router.navigateByUrl(`/${routingPathEnum.ClientFilterAuth}`);
      return false;
    }
  }
}
