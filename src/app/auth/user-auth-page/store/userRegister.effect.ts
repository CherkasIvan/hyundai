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

import { UserAuthService } from '../services/user-auth.service';
import { PersistenceService } from '../../../shared/services/persistence.service';

import { CurrentUserInterface } from '../types/currentUser.interface';

import { routingPathEnum } from '../../../shared/consts/routing-path-enum';

@Injectable()
export class RegisterEffect {
  constructor(
    private _actions$: Actions,
    private _authService: UserAuthService,
    private _persistenceService: PersistenceService,
    private _router: Router
  ) {}

  public register$ = createEffect(() =>
    this._actions$.pipe(
      ofType(userRegisterAction),
      switchMap(({ request }) => {
        return this._authService.userRegister(request).pipe(
          tap((el) => console.log(el)),
          map((currentUser: CurrentUserInterface) => {
            this._persistenceService.set('clientId', currentUser.clientId);
            return userRegisterSuccessAction({ currentUser });
          }),
          catchError((errorResponce: HttpErrorResponse) => {
            console.error(errorResponce);
            return of(
              userRegisterFailureAction({ errors: errorResponce.error.errors })
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
        return this._authService.userAuth(request).pipe(
          tap((el) => console.log(el)),
          map((currentUser: CurrentUserInterface) => {
            this._persistenceService.set('clientId', currentUser.clientId);
            return userAuthSuccessAction({ currentUser });
          }),
          catchError((errorResponce: HttpErrorResponse) => {
            console.error(errorResponce);
            return of(
              userAuthFailureAction({ errors: errorResponce.error.errors })
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
