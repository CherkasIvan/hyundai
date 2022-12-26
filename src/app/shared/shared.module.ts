import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BackendErrorMessagesComponent } from './components/backend-error-messages/backend-error-messages.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTabsModule } from '@angular/material/tabs';
import { InsurancePoliciesModalModule } from './components/insurance-policies-modal/insurance-policies-modal.module';
import { InputSliderModule } from './components/input-slider/input-slider.module';
import { CounterButtonComponent } from './components/counter-button/counter-button.component';
import { ApplicationFormComponent } from './components/application-form/application-form.component';
import { InputClearerComponent } from './components/input-clearer/input-clearer.component';

@NgModule({
  declarations: [
    BackendErrorMessagesComponent,
    CounterButtonComponent,
    ApplicationFormComponent,
    InputClearerComponent,
  ],
  imports: [
    FormsModule,
    CommonModule,
    FormsModule,
    InputSliderModule,
    MatTabsModule,
    InsurancePoliciesModalModule,
    ReactiveFormsModule,
    MatIconModule,
    MatDialogModule,
  ],
  exports: [
    ApplicationFormComponent,
    FormsModule,
    BackendErrorMessagesComponent,
    CounterButtonComponent,
    FormsModule,
    InsurancePoliciesModalModule,
    InputSliderModule,
    MatTabsModule,
    ReactiveFormsModule,
    MatIconModule,
    MatDialogModule,
    InputClearerComponent
  ],
})
export class SharedModule {}
