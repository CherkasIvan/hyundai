import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CalculationLoanPageComponent } from '../../../pages/main-form-content/sub-pages/calculation-loan-page/calculation-loan-page.component';

const routes: Routes = [
  { path: 'id:0', component: CalculationLoanPageComponent },
  { path: 'id:1', component: CalculationLoanPageComponent },
  { path: 'id:2', component: CalculationLoanPageComponent },
  { path: 'id:3', component: CalculationLoanPageComponent },
  { path: 'id:4', component: CalculationLoanPageComponent },
  { path: 'id:5', component: CalculationLoanPageComponent },
  { path: 'id:6', component: CalculationLoanPageComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SideBarRoutingModule {}
