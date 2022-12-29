import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';

import { ofType } from '@ngrx/effects';
import { Actions } from '@ngrx/effects';
import { createEffect } from '@ngrx/effects';
import {
  userRegisterAction,
  userRegisterSuccessAction,
  userRegisterFailureAction,
} from '../actions/userRegister.action';

import { switchMap, tap, map, catchError, of } from 'rxjs';

import { UserAuthService } from '../../services/user-auth.service';
import { PersistenceService } from '../../../../shared/services/persistence.service';

import { CurrentUserInterface } from '../../models/currentUser.interface';

@Injectable()
export class UserRegisterEffect {
  constructor(
    private _actions$: Actions,
    private _authService: UserAuthService,
    private _persistenceService: PersistenceService
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
}
