import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { createEffect, ofType } from '@ngrx/effects';
import { Actions } from '@ngrx/effects';

import { of, switchMap, tap } from 'rxjs';
import { AddUserModalComponent } from '../../components/add-user-modal/add-user-modal.component';
import { ClientAuthService } from '../../services/client-auth.service';
import { clientModalOpenAction, getCarsOwnersListAction, setCarsOwnersListAction } from '../actions/client-filter-page.actions';

@Injectable()
export class ClientFilterPageEffects {
  constructor(private _actions$: Actions,
              private _dialog: MatDialog,
              private _authClientService: ClientAuthService) {}

  openDialog$ = this._actions$.pipe(
    ofType(clientModalOpenAction),
    tap(() => {
      let dialogRef = this._dialog.open(AddUserModalComponent);
      return dialogRef.afterClosed();
    })
  );

  getCarsOwnersList$ = createEffect( ()=>
  this._actions$.pipe(
    ofType(getCarsOwnersListAction),
    switchMap(() => {
      return this._authClientService.getClients().pipe(
        switchMap((response) => {
          return of(setCarsOwnersListAction((response)))
        })
      )
    })
  ))
}
