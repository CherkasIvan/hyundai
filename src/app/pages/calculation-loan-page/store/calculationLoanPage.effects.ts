import { Injectable } from '@angular/core';

import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import {
   getCascoPolicies, getCascoPoliciesFailure, getCascoPoliciesSuccess,
} from './calculationLoanPage.action';

import { catchError, map, Observable, of, switchMap, pipe, tap } from 'rxjs';

import { ClientDataService } from '../../../shared/services/client-data.service';
import { PersistenceService } from '../../../shared/services/persistence.service';
import { GetCascoPoliciesBody, GetCascoResponse } from '../../../shared/models/interfaces/casco';
import { CalculationLoanService } from '../../../shared/services/calculation-loan.service';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable()
export class CalculationLoanPageEffects {
  constructor(
    private _actions$: Actions,
    private _clientDataService: ClientDataService,
    private _persistenceService: PersistenceService,
    private calculationLoanService: CalculationLoanService,
  ) {
  }

  public getCascoPolicies$ = createEffect(
    (): Observable<Action> =>
      this._actions$.pipe(
        ofType(getCascoPolicies),
        switchMap((payload: { params: GetCascoPoliciesBody }) =>
          this.calculationLoanService.getCascoPolicies(
            payload.params,
            this._persistenceService.getClientId(),
          ).pipe(
            map((response: GetCascoResponse) =>
              getCascoPoliciesSuccess({ response }),
            ),
            catchError((error: HttpErrorResponse) =>
              of(getCascoPoliciesFailure({ error })),
            ),
          ),
        ),
      ),
  );
}
