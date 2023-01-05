import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ofType } from '@ngrx/effects';
import { Actions } from '@ngrx/effects';
import { createEffect } from '@ngrx/effects';

import { switchMap, map, catchError, of, tap } from 'rxjs';

import {
  authBrokerAction,
  authBrokerSuccessAction,
  authBrokerFailureAction,
} from './broker-auth.action';

import { PersistenceService } from '../../../shared/services/persistence.service';
import { BrokerAuthService } from '../service/broker-auth.service';

import { routingPathEnum } from '../../../shared/consts/routing-path-enum';

import { CurrentBrokerInterface } from '../models/interfaces/current-broker.interface';

@Injectable()
export class BrokerAuthEffects {
  constructor(
    private _actions$: Actions,
    private _authService: BrokerAuthService,
    private _persistenceService: PersistenceService,
    private _router: Router
  ) {}

  public register$ = createEffect(() =>
    this._actions$.pipe(
      ofType(authBrokerAction),
      switchMap(({ request }) => {
        return this._authService.register(request).pipe(
          map((currentBroker: CurrentBrokerInterface) => {
            this._persistenceService.set('accessToken', currentBroker.token);
            return authBrokerSuccessAction({ currentBroker });
          }),
          catchError((errorResponce: HttpErrorResponse) => {
            console.error(errorResponce);

            return of(
              authBrokerFailureAction({ errors: errorResponce.error.errors })
            );
          })
        );
      })
    )
  );

  public redirectAfterSubmit$ = createEffect(
    () =>
      this._actions$.pipe(
        ofType(authBrokerSuccessAction),
        tap(() => {
          this._router.navigateByUrl(`/${routingPathEnum.ClientFilterAuth}`);
        })
      ),
    { dispatch: false }
  );
}
