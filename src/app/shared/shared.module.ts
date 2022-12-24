import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BackendErrorMessagesComponent } from './components/backend-error-messages/backend-error-messages.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SideBarModule } from './components/side-bar/side-bar.module';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTabsModule } from '@angular/material/tabs';
import { InsurancePoliciesModalModule } from './components/insurance-policies-modal/insurance-policies-modal.module';
import { InputSliderModule } from './components/input-slider/input-slider.module';
import { CounterButtonComponent } from './components/counter-button/counter-button.component';

@NgModule({
  declarations: [BackendErrorMessagesComponent, CounterButtonComponent],
  imports: [
    FormsModule,
    CommonModule,
    FormsModule,
    InputSliderModule,
    MatTabsModule,
    InsurancePoliciesModalModule,
    ReactiveFormsModule,
    SideBarModule,
    MatIconModule,
    MatDialogModule,
  ],
  exports: [
    FormsModule,
    BackendErrorMessagesComponent,
    CounterButtonComponent,
    FormsModule,
    InsurancePoliciesModalModule,
    InputSliderModule,
    MatTabsModule,
    ReactiveFormsModule,
    SideBarModule,
    MatIconModule,
    MatDialogModule,
  ],
})
export class SharedModule {}
