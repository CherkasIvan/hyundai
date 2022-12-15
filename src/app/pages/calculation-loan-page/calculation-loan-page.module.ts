import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CarInfoComponent } from '../components/car-info/car-info.component';
import { SideBarModule } from '../components/side-bar/side-bar.module';
import { CalculationLoanPageComponent } from './calculation-loan-page.component';

@NgModule({
  declarations: [CalculationLoanPageComponent, CarInfoComponent],
  imports: [
    CommonModule,
    SideBarModule
  ],
  exports: [CalculationLoanPageComponent, CarInfoComponent],
  bootstrap:[CalculationLoanPageComponent]
})
export class CalculationLoanPageModule {}