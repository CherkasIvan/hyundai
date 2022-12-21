import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProcessingPageComponent } from 'src/app/pages/main-form-content/sub-pages/processing-page/processing-page.component';

import { CalculationLoanPageComponent } from '../../../pages/main-form-content/sub-pages/calculation-loan-page/calculation-loan-page.component';

const routes: Routes = [
  { path: 'car_info', component: CalculationLoanPageComponent },
  { path: 'owner', component: CalculationLoanPageComponent },
  { path: 'driver', component: CalculationLoanPageComponent },
  { path: 'loan_params', component: CalculationLoanPageComponent },
  { path: 'insurenses_params', component: CalculationLoanPageComponent },
  { path: 'product_calculation', component: CalculationLoanPageComponent },
  { path: 'user_info', component: ProcessingPageComponent },
  { path: 'work', component: ProcessingPageComponent },
  { path: 'summary', component: ProcessingPageComponent },
  { path: 'access', component: ProcessingPageComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SideBarRoutingModule {}
