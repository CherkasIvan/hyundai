import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTabsModule } from '@angular/material/tabs';
import { MatSliderModule } from '@angular/material/slider';
import { MatButtonModule } from '@angular/material/button';

import { StoreModule } from '@ngrx/store';
import { buttonReducers } from './store/reducers/counter-button.reducer';
import { sliderReducers } from './store/reducers/input-slider.reducer';

import { CounterButtonComponent } from './components/counter-button/counter-button.component';
import { ApplicationFormComponent } from './components/application-form/application-form.component';
import { InputClearerComponent } from './components/input-clearer/input-clearer.component';
import { LoanParamsComponent } from './components/loan-params/loan-params.component';
import { InputSliderComponent } from './components/input-slider/input-slider.component';
import { BackendErrorMessagesComponent } from './components/backend-error-messages/backend-error-messages.component';
import { FilterInputComponent } from './components/filter-input/filter-input.component';
import { SubmitFormButtonComponent } from './components/submit-form-button/submit-form-button.component';
import { TesInputBasicComponent } from './components/tes-input-basic/tes-input-basic.component';
import { TesInputCheckboxComponent } from './components/tes-input-checkbox/tes-input-checkbox.component';
import { TesInputSlideToggleComponent } from './components/tes-input-slide-toggle/tes-input-slide-toggle.component';
import { TesButtonComponent } from './components/tes-button/tes-button.component';
import { CardLayoutComponent } from './components/card-layout/card-layout.component';
import { CardTitleComponent } from './components/card-title/card-title.component';
import { ModalHeaderComponent } from './components/modal-header/modal-header.component';

@NgModule({
  declarations: [
    BackendErrorMessagesComponent,
    CounterButtonComponent,
    ApplicationFormComponent,
    InputClearerComponent,
    LoanParamsComponent,
    InputSliderComponent,
    FilterInputComponent,
    SubmitFormButtonComponent,
    TesInputBasicComponent,
    TesInputCheckboxComponent,
    TesInputSlideToggleComponent,
    TesButtonComponent,
    CardLayoutComponent,
    CardTitleComponent,
    ModalHeaderComponent,
  ],
  imports: [
    FormsModule,
    CommonModule,
    FormsModule,
    MatTabsModule,
    StoreModule.forFeature('counter-button', buttonReducers),
    StoreModule.forFeature('input-slider', sliderReducers),
    ReactiveFormsModule,
    MatSliderModule,
    MatIconModule,
    MatDialogModule,
    MatButtonModule,
  ],
  exports: [
    ApplicationFormComponent,
    FilterInputComponent,
    CardTitleComponent,
    InputSliderComponent,
    CardLayoutComponent,
    FormsModule,
    SubmitFormButtonComponent,
    LoanParamsComponent,
    BackendErrorMessagesComponent,
    CounterButtonComponent,
    FormsModule,
    MatTabsModule,
    ReactiveFormsModule,
    MatIconModule,
    MatDialogModule,
    MatButtonModule,
    InputClearerComponent,
    TesInputBasicComponent,
    TesInputCheckboxComponent,
    TesInputSlideToggleComponent,
    TesButtonComponent,
    ModalHeaderComponent,
  ],
})
export class SharedModule {}
