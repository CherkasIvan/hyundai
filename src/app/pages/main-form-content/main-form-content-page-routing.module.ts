import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {CalculationLoanPageComponent} from './componets/calculation-loan-page/calculation-loan-page.component';
import {DocumentsPaymentsPageComponent} from './componets/documents-payments-page/documents-payments-page.component';
import {ProcessingPageComponent} from './componets/processing-page/processing-page.component';
import {MainFormContentPageComponent} from './main-form-content-page.component';

const routes: Routes = [
  {
    path: '',
    component: MainFormContentPageComponent,
    children: [
      {path: 'loan-calculation', component: CalculationLoanPageComponent},
      {path: 'processing', component: ProcessingPageComponent},
      {path: 'documents-payments', component: DocumentsPaymentsPageComponent},
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainFormContentPageRoutingModule {}
