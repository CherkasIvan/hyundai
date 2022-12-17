import {Injectable} from '@angular/core';

import {MatDialog} from '@angular/material/dialog';
import {InsurancePoliciesModalComponent} from '../../main-form-content/componets/processing-page/components/insurance-policies-modal/insurance-policies-modal.component';

@Injectable()
export class ModalService {
  constructor(public dialog: MatDialog) {}

  public insurancePolicDialog() {
    const dialogRef = this.dialog.open(InsurancePoliciesModalComponent);

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
