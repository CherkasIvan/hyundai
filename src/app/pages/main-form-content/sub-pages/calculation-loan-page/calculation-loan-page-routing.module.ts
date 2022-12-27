import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CarInfoComponent } from '../../../../pages/main-form-content/sub-pages/calculation-loan-page/components/car-info/car-info.component';
import { DriversComponent } from '../../../../pages/main-form-content/sub-pages/calculation-loan-page/components/drivers/drivers.component';
import { InsurensesParamsComponent } from '../../../../pages/main-form-content/sub-pages/calculation-loan-page/components/insurenses-params/insurenses-params.component';
import { LoanParamsComponent } from '../../../../pages/main-form-content/sub-pages/calculation-loan-page/components/loan-params/loan-params.component';
import { OwnerComponent } from '../../../../pages/main-form-content/sub-pages/calculation-loan-page/components/owner/owner.component';
import { ProductCalculationComponent } from '../../../../pages/main-form-content/sub-pages/calculation-loan-page/components/product-calculation/product-calculation.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'car-info', component: CarInfoComponent },
      { path: 'owner', component: OwnerComponent },
      { path: 'drivers', component: DriversComponent },
      { path: 'loan-params', component: LoanParamsComponent },
      { path: 'insurenses-params', component: InsurensesParamsComponent },
      { path: 'product-calculation', component: ProductCalculationComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CalculationLoanPageRoutingModule {}
