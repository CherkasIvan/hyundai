import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';

import { InsurancePolicesModalBodyComponent } from './components/insurance-polices-modal-body/insurance-polices-modal-body.component';
import { InsurancePolicesModalCardComponent } from './components/insurance-polices-modal-card/insurance-polices-modal-card.component';
import { InsurancePoliciesModalComponent } from './insurance-policies-modal.component';
import { InsurancePolicesModalOptionsComponent } from './components/insurance-polices-modal-options/insurance-polices-modal-options.component';
import { ModalHeaderComponent } from '../modal-header/modal-header.component';

@NgModule({
  declarations: [
    InsurancePolicesModalBodyComponent,
    InsurancePolicesModalCardComponent,
    ModalHeaderComponent,
    InsurancePolicesModalOptionsComponent,
    InsurancePoliciesModalComponent,
  ],
  exports: [ModalHeaderComponent],
  imports: [CommonModule, MatDialogModule, MatIconModule, ReactiveFormsModule],
})
export class InsurancePoliciesModalModule {}
