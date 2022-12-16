import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {CalculationLoanPageComponent} from './componets/calculation-loan-page/calculation-loan-page.component';
import { DocumentsPaymentsPageComponent } from './componets/documents-payments-page/documents-payments-page.component';
import { ProcessingPageComponent } from './componets/processing-page/processing-page.component';
import {MainContainerPageComponent} from './main-container-page.component';

const routes: Routes = [
  {
    path: '',
    component: MainContainerPageComponent,
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
export class MainContainerPageRoutingModule {}
