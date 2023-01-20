import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { routingPathEnum } from '../../shared/consts/routing-path-enum';

import { CarInfoComponent } from './components/car-info/car-info.component';
import { DriversPageComponent } from './components/drivers/drivers-page.component';
import { InsurancesParamsComponent } from './components/insurances-params/insurances-params.component';
import { LoanParamsComponent } from './components/loan-params/loan-params.component';
import { OwnerComponent } from './components/owner/owner.component';
import { ProductCalculationPageComponent } from './components/product-calculation/product-calculation-page.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: routingPathEnum.CarInfo, component: CarInfoComponent,
        // resolve: {currentCustomer:CalculationLoanPageResolver}
      },
      { path: routingPathEnum.CarOwner, component: OwnerComponent },
      { path: routingPathEnum.Drivers, component: DriversPageComponent },
      { path: routingPathEnum.LoanParams, component: LoanParamsComponent },
      {
        path: routingPathEnum.InsuranceParams,
        component: InsurancesParamsComponent,
      },
      {
        path: routingPathEnum.ProductsCalculation,
        component: ProductCalculationPageComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CalculationLoanPageRoutingModule {}
