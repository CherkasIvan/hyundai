import { Injectable } from '@angular/core';

import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';

import { BehaviorSubject } from 'rxjs';
import { ClientAuthService } from 'src/app/auth/user-filter-page/services/client-auth.service';

import { AddUserModalComponent } from '../../auth/user-filter-page/components/add-user-modal/add-user-modal.component';
import { InsurancePoliciesModalComponent } from '../components/insurance-policies-modal/insurance-policies-modal.component';

@Injectable()
export class ModalService {
  public isShow$: BehaviorSubject<boolean> = new BehaviorSubject(true);

  public changeOptionsInfo(): void {
    this.isShow$.next(!this.isShow$);
  }

  constructor(private _dialog: MatDialog) {}

  public insurancePolicyDialog(): void {
    this._dialog.open(InsurancePoliciesModalComponent, {
      height: '100%',
      // maxHeight: '883px',
    });
  }

  public addNewClientDialog(): void {
    const dialogRef = this._dialog.open(AddUserModalComponent, {
      width: '1031px',
      // maxHeight: '883px',
    });
    // dialogRef
    //   .afterClosed()
    //   .subscribe(() => this._getUsersService.getClients().subscribe());

    // this._store$.dispatch(clientModalOpenAction(payload));
  }
}
