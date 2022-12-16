import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {ToolbarModule} from '../../components/toolbar/toolbar.module';
import {SideBarModule} from '../../pages/components/side-bar/side-bar.module';
import {MainContainerPageComponent} from './main-container-page.component';
import {MainContainerPageRoutingModule} from './main-container-page-routing.module';
import {CalculationLoanPageComponent} from './componets/calculation-loan-page/calculation-loan-page.component';
import {CarInfoComponent} from '../components/car-info/car-info.component';
import {DocumentsPaymentsPageComponent} from './componets/documents-payments-page/documents-payments-page.component';
import {DocumentsComponent} from './componets/documents-payments-page/components/documents/documents.component';
import {ProcessingPageComponent} from './componets/processing-page/processing-page.component';
import {QuestionnaireFormComponent} from './componets/processing-page/components/questionnaire-form/questionnaire-form.component';

@NgModule({
  declarations: [
    MainContainerPageComponent,
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
    MainContainerPageRoutingModule,
  ],
  exports: [MainContainerPageComponent],
  bootstrap: [MainContainerPageComponent],
})
export class MainContainerPageModule {}
