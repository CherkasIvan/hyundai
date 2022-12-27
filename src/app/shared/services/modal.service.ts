import { Injectable } from '@angular/core';

import { MatDialog } from '@angular/material/dialog';

import { BehaviorSubject } from 'rxjs';

import { InsurancePoliciesModalComponent } from '../components/insurance-policies-modal/insurance-policies-modal.component';

@Injectable()
export class ModalService {
  public isShow$: BehaviorSubject<boolean> = new BehaviorSubject(true);

  public changeOptionsInfo(): void {
    this.isShow$.next(!this.isShow$);
  }

  constructor(private _dialog: MatDialog) {}

  public insurancePolicDialog(): void {
    const dialogRef = this._dialog.open(InsurancePoliciesModalComponent, {
      maxHeight: '100%',
      // maxHeight: '883px',
    });
  }
}
