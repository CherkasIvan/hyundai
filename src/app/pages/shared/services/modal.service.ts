import {Injectable} from '@angular/core';

import {MatDialog} from '@angular/material/dialog';
import {InsurancePoliciesModalComponent} from '../../main-form-content/componets/processing-page/components/insurance-policies-modal/insurance-policies-modal.component';

@Injectable()
export class ModalService {
  constructor(public dialog: MatDialog) {}

  public insurancePolicDialog() {
    const dialogRef = this.dialog.open(InsurancePoliciesModalComponent, {
      minWidth: '740px',
      width: '100%',
      maxHeight: '100%',
      // maxHeight: '883px',
    });

    dialogRef.afterClosed().subscribe((result) => {});
  }
}
