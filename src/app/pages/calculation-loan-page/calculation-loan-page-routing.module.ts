import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CarInfoComponent } from './components/car-info/car-info.component';
import { DriversComponent } from './components/drivers/drivers.component';
import { InsurensesParamsComponent } from './components/insurenses-params/insurenses-params.component';
import { LoanParamsComponent } from './components/loan-params/loan-params.component';
import { OwnerComponent } from './components/owner/owner.component';
import { ProductCalculationComponent } from './components/product-calculation/product-calculation.component';

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
