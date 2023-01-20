import { Injectable } from '@angular/core';

import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { EditCarResponseInterface } from '../../../shared/models/interfaces/edit-car-response.interface';
import { SuccessCarConnectedInterface } from '../../../shared/models/interfaces/success-connection-car.interface';

import {
  connectCarToClientAction, connectCarToClientFailureAction, connectCarToClientSuccessAction,
  createCarAction, createCarFailureAction, createCarSuccessAction, editCarAction, editCarFailureAction, editCarSuccessAction,
  getCascoPolicies, getCascoPoliciesFailure, getCascoPoliciesSuccess, getSelectedClientAction, setCarIdAction, setSelectedClientAction,
} from './calculationLoanPage.action';

import { catchError, map, Observable, of, switchMap } from 'rxjs';

import { ClientsDataService } from '../../../shared/services/clients-data.service';
import { PersistenceService } from '../../../shared/services/persistence.service';
import { GetCascoPoliciesBody, GetCascoResponse } from '../../../shared/models/interfaces/casco';
import { CalculationLoanService } from '../../../shared/services/calculation-loan.service';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable()
export class CalculationLoanPageEffects {
  constructor(
    private _actions$: Actions,
    private _clientDataService: ClientsDataService,
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

  public getSelectedClient$ = createEffect( ()=>
    this._actions$.pipe(
      ofType(getSelectedClientAction),
      map((payload) => payload?.clientId),
      switchMap((payload) => {
        return this._clientDataService.getClients( {clientId: payload }).pipe(
          map((response) => response.clients[0]),
          switchMap((response) => {
            return of(setSelectedClientAction((response)))
          }),
        )
      }),
    ));

  public createCar = createEffect( () =>
  this._actions$.pipe(
    ofType(createCarAction),
    switchMap(() => {
      return this._clientDataService.createCar({}).pipe(
        map((response) => response.carId),
        switchMap((response) => {
          return of(setCarIdAction(({carId: response})), createCarSuccessAction((response))).pipe(
            catchError((error: HttpErrorResponse) =>
              of(createCarFailureAction({ error })),
            ),
          )
        }),
      )
    }),
  ));

  public editCar = createEffect(() => {
    return this._actions$.pipe(
      ofType(editCarAction),
      map((request) => request.params),
      switchMap((params) => {
       return this._clientDataService.editCar(params).pipe(
         map((response: EditCarResponseInterface) =>
           editCarSuccessAction({ response }),
         ),
         catchError((error: HttpErrorResponse) =>
           of(editCarFailureAction({ error })),
         ),
       )
      }),
    )
  });

  public connectCarToClient = createEffect(() => {
    return this._actions$.pipe(
      ofType(connectCarToClientAction),
      map((response) => response.params),
      switchMap((payload) => {
        console.log(payload);
        return this._clientDataService.connectCarToClient(payload).pipe(
          map((response: SuccessCarConnectedInterface) =>
            connectCarToClientSuccessAction({ response }),
          ),
          catchError((error: HttpErrorResponse) =>
            of(connectCarToClientFailureAction({ error })),
          ),
        )
      }),
    )
  });
}
