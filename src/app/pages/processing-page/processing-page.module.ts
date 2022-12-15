import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SideBarModule } from '../components/side-bar/side-bar.module';
import { ProcessingPageComponent } from './processing-page.component';
import { QuestionnaireFormComponent } from './components/questionnaire-form/questionnaire-form.component';

@NgModule({
  declarations: [ProcessingPageComponent, QuestionnaireFormComponent],
  imports: [
    CommonModule,
    SideBarModule
  ],
  exports: [ProcessingPageComponent],
  bootstrap:[ProcessingPageComponent]
})
export class ProcessingPageModule {}