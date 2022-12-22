import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';

import { CalculationLoanPageComponent } from './calculation-loan-page.component';

const routes: Routes = [{ path: '', component: CalculationLoanPageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CalculationLoanPageRoutingModule {}
