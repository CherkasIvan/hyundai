import {PersistenceService} from '../../../pages/shared/services/persistence.service';
import {BackendErrorsInterface} from '../../../pages/shared/types/backendErrors.interface';
import {CurrentBrokerInterface} from './types/currentBroker.interface';
import {Injectable} from '@angular/core';
import {ofType} from '@ngrx/effects';
import {Actions} from '@ngrx/effects';
import {switchMap, map, catchError, of, tap} from 'rxjs';
import {createEffect} from '@ngrx/effects';
import {
  authBrokerAction,
  authBrokerSuccessAction,
  authBrokerFailureAction,
} from './boker-auth.action';
import {BrokerAuthService} from '../service/broker-auth.service';
import {HttpErrorResponse} from '@angular/common/http';
import {Router} from '@angular/router';

@Injectable()
export class AuthEffects {
  constructor(
    private actions$: Actions,
    private authService: BrokerAuthService,
    private persistenceService: PersistenceService,
    private router: Router
  ) {}

  public register$ = createEffect(() =>
    this.actions$.pipe(
      ofType(authBrokerAction),
      switchMap(({request}) => {
        return this.authService.register(request).pipe(
          map((currentBroker: CurrentBrokerInterface) => {
            this.persistenceService.set('accessToken', currentBroker.token);
            return authBrokerSuccessAction({currentBroker});
          }),
          catchError((errorResponce: HttpErrorResponse) => {
            console.error(errorResponce);

            return of(
              authBrokerFailureAction({errors: errorResponce.error.errors})
            );
          })
        );
      })
    )
  );

  public redirectAfterSubmit$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(authBrokerSuccessAction),
        tap(() => {
          this.router.navigateByUrl('/register');
        })
      ),
    {dispatch: false}
  );
}
