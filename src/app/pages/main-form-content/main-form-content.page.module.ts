import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {ReactiveFormsModule} from '@angular/forms';

import {MatDialogModule} from '@angular/material/dialog';

import {FormlyModule} from '@ngx-formly/core';

import {SideBarModule} from '../components/side-bar/side-bar.module';
import {MainFormContentPageRoutingModule} from './main-form-content-page-routing.module';

import {ModalService} from '../shared/services/modal.service';

import {CalculationLoanPageComponent} from './componets/calculation-loan-page/calculation-loan-page.component';
import {CarInfoComponent} from '../components/car-info/car-info.component';
import {DocumentsPaymentsPageComponent} from './componets/documents-payments-page/documents-payments-page.component';
import {DocumentsComponent} from './componets/documents-payments-page/components/documents/documents.component';
import {ProcessingPageComponent} from './componets/processing-page/processing-page.component';
import {QuestionnaireFormComponent} from './componets/processing-page/components/questionnaire-form/questionnaire-form.component';
import {MainFormContentPageComponent} from './main-form-content-page.component';
import {MainFormHeaderComponent} from './componets/main-form-header/main-form-header.component';
import {InsurancePoliciesModalComponent} from './componets/processing-page/components/insurance-policies-modal/insurance-policies-modal.component';
import {InsurancePolicesModalHeaderComponent} from './componets/processing-page/components/insurance-polices-modal-header/insurance-polices-modal-header.component';
import {MatIconModule} from '@angular/material/icon';
import { InsurancePolicesModalBodyComponent } from './componets/processing-page/components/insurance-polices-modal-body/insurance-polices-modal-body.component';
import { InsurancePolicesModalCardComponent } from './componets/processing-page/components/insurance-polices-modal-card/insurance-polices-modal-card.component';
import { InsurancePolicesModalOptionsComponent } from './componets/processing-page/components/insurance-polices-modal-options/insurance-polices-modal-options.component';

@NgModule({
  declarations: [
    MainFormHeaderComponent,
    MainFormContentPageComponent,
    CalculationLoanPageComponent,
    InsurancePoliciesModalComponent,
    DocumentsPaymentsPageComponent,
    QuestionnaireFormComponent,
    DocumentsComponent,
    CarInfoComponent,
    ProcessingPageComponent,
    QuestionnaireFormComponent,
    InsurancePoliciesModalComponent,
    InsurancePolicesModalHeaderComponent,
    InsurancePolicesModalBodyComponent,
    InsurancePolicesModalCardComponent,
    InsurancePolicesModalOptionsComponent,
  ],
  imports: [
    CommonModule,
    SideBarModule,
    RouterModule,
    MatDialogModule,
    ReactiveFormsModule,
    MainFormContentPageRoutingModule,
    FormlyModule,
    MatIconModule,
  ],
  providers: [ModalService],
  exports: [MainFormContentPageComponent],
  bootstrap: [MainFormContentPageComponent],
})
export class MainFormContentPageModule {}
