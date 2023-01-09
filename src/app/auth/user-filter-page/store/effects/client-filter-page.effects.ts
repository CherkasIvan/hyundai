import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { ofType } from '@ngrx/effects';
import { Actions } from '@ngrx/effects';
import { select, Store } from '@ngrx/store';

import { map, tap, withLatestFrom } from 'rxjs';
import { AddUserModalComponent } from '../../components/add-user-modal/add-user-modal.component';
import {
  clientModalCloseAction,
  clientModalOpenAction,
  clientModalResultAction,
} from '../actions/client-filter-page.actions';
import { isClientModalOpenSelector } from '../selectors/client-filter-page.selectors';

@Injectable()
export class ClientFilterPageEffects {
  constructor(
    private _actions$: Actions,
    private _store$: Store,
    private _dialog: MatDialog
  ) {}

  openDialog$ = this._actions$.pipe(
    ofType(clientModalOpenAction),
    tap(() => {
      let dialogRef = this._dialog.open(AddUserModalComponent);
      return dialogRef.afterClosed();
    })
  );
}
