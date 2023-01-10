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

import { switchMap, map, catchError, of } from 'rxjs';

import { PersistenceService } from '../../../../shared/services/persistence.service';

import { CurrentUserInterface } from '../../models/interfaces/current-user.interface';
import { ClientAuthService } from '../../../../auth/user-filter-page/services/client-auth.service';

@Injectable()
export class UserRegisterEffect {
  constructor(
    private _actions$: Actions,
    private _clientAuthService: ClientAuthService,
    private _persistenceService: PersistenceService
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
