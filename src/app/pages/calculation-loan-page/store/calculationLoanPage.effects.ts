import { Injectable } from '@angular/core';

import { Actions, createEffect, ofType } from '@ngrx/effects';

import { pipe, switchMap, tap } from 'rxjs';

import { ClientDataService } from '../../../shared/services/client-data.service';
import { PersistenceService } from '../../../shared/services/persistence.service';
import { formCarOptionsChangeAction } from './calculationLoanPage.action';

@Injectable()
export class CalcultionLoanPageEffects {
  constructor(
    private _actions$: Actions,
    private _clientDataService: ClientDataService,
    private _persistenceService: PersistenceService
  ) {}

  public getCarOptions$ = createEffect(() =>
    this._actions$.pipe(
      ofType(formCarOptionsChangeAction),
      pipe(
        tap((el) => {
          console.log(el);
        })
      )
      // switchMap(({ formValue }) => {
      //   return this._clientDataService.getClientCars(formValue).pipe(
      //     tap(el=> {console.log(el)
      //     return el}),
      //     switchMap(async (carOptions) => {
      //       return formCarOptionsChangeAction({ carOptions });
      //     })
      //   );
      // })
    )
  );
}
