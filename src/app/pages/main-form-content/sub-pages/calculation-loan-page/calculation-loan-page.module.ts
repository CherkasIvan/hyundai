import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CalculationLoanPageRoutingModule } from './calculation-loan-page-routing.module';
import { CarInfoComponent } from './components/car-info/car-info.component';
import { SharedModule } from '../../../../shared/shared.module';

import { CalculationLoanPageComponent } from './calculation-loan-page.component';

@NgModule({
  declarations: [CarInfoComponent, CalculationLoanPageComponent],
  imports: [CalculationLoanPageRoutingModule, CommonModule, SharedModule],
  exports: [CarInfoComponent],
})
export class CalculationLoanPageModule {}
