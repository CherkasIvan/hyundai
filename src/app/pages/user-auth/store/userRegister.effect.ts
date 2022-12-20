import { PersistenceService } from '../../../shared/services/persistence.service';
import { BackendErrorsInterface } from '../../../shared/types/backendErrors.interface';
import { CurrentUserInterface } from '../types/currentUser.interface';
import { Injectable } from '@angular/core';
import { ofType } from '@ngrx/effects';
import { Actions } from '@ngrx/effects';
import { switchMap, map, catchError, of, tap } from 'rxjs';
import { createEffect } from '@ngrx/effects';
import {
  userAuthAction,
  userAuthSuccessAction,
  userAuthFailureAction,
} from './userRegister.action';
import { UserAuthService } from '../services/user-auth.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

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
      ofType(userAuthAction),
      switchMap(({ request }) => {
        return this.authService.register(request).pipe(
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

  public redirectAfterSubmit$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(userAuthSuccessAction),
        tap(() => {
          this.router.navigateByUrl('/main-form');
        })
      ),
    { dispatch: false }
  );
}
