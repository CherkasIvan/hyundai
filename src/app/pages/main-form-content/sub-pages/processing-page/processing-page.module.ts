import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProcessingPageRoutingModule } from './processing-page-routing.module';
import { ProcessingPageComponent } from './processing-page.component';

import { SharedModule } from '../../../../shared/shared.module';
import { QuestionnaireFormComponent } from './components/questionnaire-form/questionnaire-form.component';

@NgModule({
  declarations: [ProcessingPageComponent, QuestionnaireFormComponent],
  exports: [ProcessingPageComponent, QuestionnaireFormComponent],
  imports: [ProcessingPageRoutingModule, CommonModule, SharedModule],
})
export class ProcessingPageModule {}
