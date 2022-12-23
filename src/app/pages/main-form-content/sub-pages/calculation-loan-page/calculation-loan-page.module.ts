import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CalculationLoanPageRoutingModule } from './calculation-loan-page-routing.module';
import { SharedModule } from '../../../../shared/shared.module';
import { CarInfoComponent } from './components/car-info/car-info.component';
import { CalculationLoanPageComponent } from './calculation-loan-page.component';

@NgModule({
  declarations: [CarInfoComponent, CalculationLoanPageComponent],
  exports:[CarInfoComponent, CalculationLoanPageComponent],
  imports: [CalculationLoanPageRoutingModule, CommonModule, SharedModule],
})
export class CalculationLoanPageModule {}
