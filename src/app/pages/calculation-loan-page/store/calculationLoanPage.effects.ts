import { Injectable } from '@angular/core';

import { Actions, createEffect, ofType } from '@ngrx/effects';
import {
  getCarOptionsAction,
  setCarOptionsAction,
} from './calculationLoanPage.action';

import { switchMap } from 'rxjs';

import { ClientDataService } from '../../../shared/services/client-data.service';
import { PersistenceService } from '../../../shared/services/persistence.service';

@Injectable()
export class CalcultionLoanPageEffects {
  constructor(
    private _actions$: Actions,
    private _clientDataService: ClientDataService,
    private _persistenceService: PersistenceService
  ) {}

  public getCarOptions$ = createEffect(() =>
    this._actions$.pipe(
      ofType(getCarOptionsAction),
      switchMap(({ clientId }) => {
        return this._clientDataService.getClientCars(clientId).pipe(
          switchMap(async (carOptions) => {
            return setCarOptionsAction({ carOptions });
          })
        );
      })
    )
  );
}
