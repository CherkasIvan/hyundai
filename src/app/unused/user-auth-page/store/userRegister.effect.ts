import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

import { ofType } from '@ngrx/effects';
import { Actions } from '@ngrx/effects';
import { createEffect } from '@ngrx/effects';
import {
  userAuthAction,
  userAuthSuccessAction,
  userAuthFailureAction,
  userRegisterAction,
  userRegisterSuccessAction,
  userRegisterFailureAction,
} from './userRegister.action';

import { switchMap, map, catchError, of, tap } from 'rxjs';

import { PersistenceService } from '../../../shared/services/persistence.service';

import { routingPathEnum } from '../../../shared/consts/routing-path-enum';

import { CurrentUserInterface } from '../models/interfaces/current-user.interface';
import { ClientAuthService } from '../../user-filter-page/services/client-auth.service';

@Injectable()
export class RegisterEffect {
  constructor(
    private _actions$: Actions,
    private _clientAuthService: ClientAuthService,
    private _persistenceService: PersistenceService,
    private _router: Router
  ) {}

  public register$ = createEffect(() =>
    this._actions$.pipe(
      ofType(userRegisterAction),
      switchMap(({ request }) => {
        return this._clientAuthService.userRegister(request).pipe(
          map((currentUser: CurrentUserInterface) => {
            this._persistenceService.set('clientId', currentUser.clientId);
            return userRegisterSuccessAction({ currentUser });
          }),
          catchError((errorResponse: HttpErrorResponse) => {
            console.error(errorResponse);
            return of(
              userRegisterFailureAction({ errors: errorResponse.error.errors })
            );
          })
        );
      })
    )
  );

  public userAuth$ = createEffect(() =>
    this._actions$.pipe(
      ofType(userAuthAction),
      switchMap(({ request }) => {
        return this._clientAuthService.userAuth(request).pipe(
          map((currentUser: CurrentUserInterface) => {
            this._persistenceService.set('clientId', currentUser.clientId);
            return userAuthSuccessAction({ currentUser });
          }),
          catchError((errorResponse: HttpErrorResponse) => {
            console.error(errorResponse);
            return of(
              userAuthFailureAction({ errors: errorResponse.error.errors })
            );
          })
        );
      })
    )
  );

  // public redirectAfterSuccessUserRegisterSubmit$ = createEffect(
  //   () =>
  //     this.actions$.pipe(
  //       ofType(userRegisterSuccessAction),
  //       tap(() => {
  //         this.router.navigateByUrl(
  //           `/${routingPathEnum.MainPage}/${routingPathEnum.LoanCalculationPage}/${routingPathEnum.CarInfo}`
  //         );
  //       })
  //     ),
  //   { dispatch: false }
  // );

  public redirectAfterSuccessUserAuthSubmit$ = createEffect(
    () =>
      this._actions$.pipe(
        ofType(userAuthSuccessAction),
        tap(() => {
          this._router.navigateByUrl(
            `/${routingPathEnum.MainPage}/${routingPathEnum.LoanCalculationPage}/${routingPathEnum.CarInfo}`
          );
        })
      ),
    { dispatch: false }
  );
}
