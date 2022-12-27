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
} from './userRegister.action';

import { switchMap, map, catchError, of, tap } from 'rxjs';

import { UserAuthService } from '../services/user-auth.service';
import { PersistenceService } from '../../../shared/services/persistence.service';

import { CurrentUserInterface } from '../types/currentUser.interface';

import { routingPathEnum } from '../../../shared/consts/routing-path-enum';

@Injectable()
export class RegisterEffect {
  constructor(
    private actions$: Actions,
    private authService: UserAuthService,
    private persistenceService: PersistenceService,
    private router: Router
  ) {}

  public register$ = createEffect(() =>
    this.actions$.pipe(
      ofType(userRegisterAction),
      switchMap(({ request }) => {
        return this.authService.userRegister(request).pipe(
          map((currentUser: CurrentUserInterface) => {
            this.persistenceService.set('clientId', currentUser.clientId);
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

  public userAuth$ = createEffect(() =>
    this.actions$.pipe(
      ofType(userAuthAction),
      switchMap(({ request }) => {
        return this.authService.userAuth(request).pipe(
          tap((el) => console.log(el)),
          map((currentUser: CurrentUserInterface) => {
            this.persistenceService.set('clientId', currentUser.clientId);
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

  // public redirectAfterSuccessUserAuthSubmit$ = createEffect(
  //   () =>
  //     this.actions$.pipe(
  //       ofType(userAuthSuccessAction),
  //       tap(() => {
  //         this.router.navigateByUrl(
  //           `/${routingPathEnum.MainPage}/${routingPathEnum.LoanCalculationPage}/${routingPathEnum.CarInfo}`
  //         );
  //       })
  //     ),
  //   { dispatch: false }
  // );
}
