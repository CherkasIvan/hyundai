import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { routingPathEnum } from '../../shared/consts/routing-path-enum';

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
      { path: routingPathEnum.CarInfo, component: CarInfoComponent },
      { path: routingPathEnum.CarOwner, component: OwnerComponent },
      { path: routingPathEnum.Drivers, component: DriversComponent },
      { path: routingPathEnum.LoanParams, component: LoanParamsComponent },
      {
        path: routingPathEnum.InsuranceParams,
        component: InsurensesParamsComponent,
      },
      {
        path: routingPathEnum.ProductsCalculation,
        component: ProductCalculationComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CalculationLoanPageRoutingModule {}
