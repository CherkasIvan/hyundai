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
} from '../actions/userAuth.action';

import { switchMap, map, catchError, of, tap } from 'rxjs';

import { PersistenceService } from 'src/app/shared/services/persistence.service';
import { UserAuthService } from '../../services/user-auth.service';

import { routingPathEnum } from '../../../../shared/consts/routing-path-enum';

import { CurrentUserInterface } from '../../types/currentUser.interface';

@Injectable()
export class UserAuthEffect {
  constructor(
    private _actions$: Actions,
    private _authService: UserAuthService,
    private _persistenceService: PersistenceService,
    private _router: Router
  ) {}

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
