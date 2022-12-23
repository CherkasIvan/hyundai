import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CalculationLoanPageRoutingModule } from './calculation-loan-page-routing.module';
import { SharedModule } from '../../../../shared/shared.module';
import { CarInfoComponent } from './components/car-info/car-info.component';
import { CalculationLoanPageComponent } from './calculation-loan-page.component';
import { OwnerComponent } from './components/owner/owner.component';
import { DriversComponent } from './components/drivers/drivers.component';
import { LoanParamsComponent } from './components/loan-params/loan-params.component';
import { InsurensesParamsComponent } from './components/insurenses-params/insurenses-params.component';
import { ProductCalculationComponent } from './components/product-calculation/product-calculation.component';

@NgModule({
  declarations: [
    CarInfoComponent,
    CalculationLoanPageComponent,
    OwnerComponent,
    DriversComponent,
    LoanParamsComponent,
    InsurensesParamsComponent,
    ProductCalculationComponent,
  ],
  exports: [CarInfoComponent, CalculationLoanPageComponent],
  imports: [CalculationLoanPageRoutingModule, CommonModule, SharedModule],
})
export class CalculationLoanPageModule {}
