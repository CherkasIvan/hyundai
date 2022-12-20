import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProcessingPageRoutingModule } from './processing-page-routing.module';
import { ProcessingPageComponent } from './processing-page.component';

import { SharedModule } from '../../../../shared/shared.module';
import { QuestionnaireFormComponent } from './components/questionnaire-form/questionnaire-form.component';
import { InsurancePolicesModalBodyComponent } from './components/insurance-polices-modal-body/insurance-polices-modal-body.component';
import { InsurancePolicesModalCardComponent } from './components/insurance-polices-modal-card/insurance-polices-modal-card.component';
import { InsurancePolicesModalHeaderComponent } from './components/insurance-polices-modal-header/insurance-polices-modal-header.component';
import { InsurancePolicesModalOptionsComponent } from './components/insurance-polices-modal-options/insurance-polices-modal-options.component';
import { InsurancePoliciesModalComponent } from './components/insurance-policies-modal/insurance-policies-modal.component';

@NgModule({
  declarations: [
    ProcessingPageComponent,
    QuestionnaireFormComponent,
    InsurancePoliciesModalComponent,
    InsurancePolicesModalHeaderComponent,
    InsurancePolicesModalBodyComponent,
    InsurancePolicesModalCardComponent,
    InsurancePolicesModalOptionsComponent,
  ],
  imports: [ProcessingPageRoutingModule, CommonModule, SharedModule],
})
export class ProcessingPageModule {}
