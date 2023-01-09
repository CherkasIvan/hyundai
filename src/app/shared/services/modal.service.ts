import { Injectable } from '@angular/core';

import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';

import { BehaviorSubject } from 'rxjs';
import { clientModalOpenAction } from 'src/app/auth/user-filter-page/store/actions/client-filter-page.actions';

import { AddUserModalComponent } from '../../auth/user-filter-page/components/add-user-modal/add-user-modal.component';
import { InsurancePoliciesModalComponent } from '../components/insurance-policies-modal/insurance-policies-modal.component';

@Injectable()
export class ModalService {
  public isShow$: BehaviorSubject<boolean> = new BehaviorSubject(true);

  public changeOptionsInfo(): void {
    this.isShow$.next(!this.isShow$);
  }

  constructor(private _dialog: MatDialog, private _store$: Store<any>) {}

  public insurancePolicDialog(): void {
    this._dialog.open(InsurancePoliciesModalComponent, {
      height: '100%',
      // maxHeight: '883px',
    });
  }

  public addNewClientDialog(): void {
    this._dialog.open(AddUserModalComponent, {
      width: '1031px',
      // maxHeight: '883px',
    });
  }

  // this._store$.dispatch(clientModalOpenAction(payload));
}
