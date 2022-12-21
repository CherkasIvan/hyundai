import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InsurancePolicesModalBodyComponent } from './components/insurance-polices-modal-body/insurance-polices-modal-body.component';
import { InsurancePolicesModalCardComponent } from './components/insurance-polices-modal-card/insurance-polices-modal-card.component';
import { InsurancePolicesModalHeaderComponent } from './components/insurance-polices-modal-header/insurance-polices-modal-header.component';
import { InsurancePoliciesModalComponent } from './insurance-policies-modal.component';
import { InsurancePolicesModalOptionsComponent } from './components/insurance-polices-modal-options/insurance-polices-modal-options.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';

@NgModule({
  declarations: [
    InsurancePolicesModalBodyComponent,
    InsurancePolicesModalCardComponent,
    InsurancePolicesModalHeaderComponent,
    InsurancePolicesModalOptionsComponent,
    InsurancePoliciesModalComponent,
  ],
  imports: [
    CommonModule,
    MatDialogModule,
    MatIconModule,
    ReactiveFormsModule,
    FormlyModule,
  ],
})
export class InsurancePoliciesModalModule {}
