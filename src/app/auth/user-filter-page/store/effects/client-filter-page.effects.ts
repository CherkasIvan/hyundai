import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { ofType } from '@ngrx/effects';
import { Actions } from '@ngrx/effects';

import { tap } from 'rxjs';
import { AddUserModalComponent } from '../../components/add-user-modal/add-user-modal.component';
import { clientModalOpenAction } from '../actions/client-filter-page.actions';

@Injectable()
export class ClientFilterPageEffects {
  constructor(private _actions$: Actions, private _dialog: MatDialog) {}

  openDialog$ = this._actions$.pipe(
    ofType(clientModalOpenAction),
    tap(() => {
      let dialogRef = this._dialog.open(AddUserModalComponent);
      return dialogRef.afterClosed();
    })
  );
}
