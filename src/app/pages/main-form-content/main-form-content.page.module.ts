import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {FormlyModule} from '@ngx-formly/core';
import {ToolbarModule} from '../../components/toolbar/toolbar.module';
import {SideBarModule} from '../components/side-bar/side-bar.module';
import {CalculationLoanPageComponent} from './componets/calculation-loan-page/calculation-loan-page.component';
import {CarInfoComponent} from '../components/car-info/car-info.component';
import {DocumentsPaymentsPageComponent} from './componets/documents-payments-page/documents-payments-page.component';
import {DocumentsComponent} from './componets/documents-payments-page/components/documents/documents.component';
import {ProcessingPageComponent} from './componets/processing-page/processing-page.component';
import {QuestionnaireFormComponent} from './componets/processing-page/components/questionnaire-form/questionnaire-form.component';
import {MainFormContentPageComponent} from './main-form-content-page.component';
import {MainFormHeaderComponent} from './componets/main-form-header/main-form-header.component';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [
    MainFormHeaderComponent,
    MainFormContentPageComponent,
    CalculationLoanPageComponent,
    DocumentsPaymentsPageComponent,
    QuestionnaireFormComponent,
    DocumentsComponent,
    CarInfoComponent,
    ProcessingPageComponent,
    QuestionnaireFormComponent,
  ],
  imports: [
    CommonModule,
    ToolbarModule,
    SideBarModule,
    RouterModule,
    ReactiveFormsModule,
    FormlyModule,
  ],
  exports: [MainFormContentPageComponent],
  bootstrap: [MainFormContentPageComponent],
})
export class MainContainerPageModule {}
