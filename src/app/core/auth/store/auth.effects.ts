import {PersistenceService} from '../../../pages/shared/services/persistence.service';
import {BackendErrorsInterface} from '../../../pages/shared/types/backendErrors.interface';
import {CurrentUserInterface} from './../../../pages/shared/types/currentUser.interface';
import {Injectable} from '@angular/core';
import {ofType} from '@ngrx/effects';
import {Actions} from '@ngrx/effects';
import {switchMap, map, catchError, of, tap} from 'rxjs';
import {createEffect} from '@ngrx/effects';
import {
  registerAction,
  registerFailureAction,
  registerSuccessAction,
} from './auth.action';
import {AuthService} from '../service/auth.service';
import {HttpErrorResponse} from '@angular/common/http';
import {Router} from '@angular/router';

@Injectable()
export class AuthEffects {
  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private persistenceService: PersistenceService,
    private router: Router
  ) {}

  public register$ = createEffect(() =>
    this.actions$.pipe(
      ofType(registerAction),
      switchMap(({request}) => {
        return this.authService.register(request).pipe(
          map((currentUser: CurrentUserInterface) => {
            this.persistenceService.set('accessToken', currentUser.id);
            return registerSuccessAction({currentUser});
          }),
          catchError((errorResponce: HttpErrorResponse) => {
            console.error(errorResponce);

            return of(
              registerFailureAction({errors: errorResponce.error.errors})
            );
          })
        );
      })
    )
  );

  public redirectAfterSubmit$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(registerSuccessAction),
        tap(() => {
          this.router.navigateByUrl('/register');
        })
      ),
    {dispatch: false}
  );
}
