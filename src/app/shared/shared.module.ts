import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BackendErrorMessagesComponent } from './components/backend-error-messages/backend-error-messages.component';

import { FormlyModule } from '@ngx-formly/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SideBarModule } from './components/side-bar/side-bar.module';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { InsurancePoliciesModalModule } from './components/insurance-policies-modal/insurance-policies-modal.module';

@NgModule({
  declarations: [BackendErrorMessagesComponent],
  imports: [
    CommonModule,
    FormlyModule,
    FormsModule,
    InsurancePoliciesModalModule,
    ReactiveFormsModule,
    SideBarModule,
    MatIconModule,
    MatDialogModule,
  ],
  exports: [
    BackendErrorMessagesComponent,
    FormlyModule,
    FormsModule,
    InsurancePoliciesModalModule,
    ReactiveFormsModule,
    SideBarModule,
    MatIconModule,
    MatDialogModule,
  ],
})
export class SharedModule {}
