import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { CarInfoComponent } from '../components/car-info/car-info.component';
import { SideBarModule } from '../components/side-bar/side-bar.module';
import { CalculationLoanPageComponent } from './calculation-loan-page.component';

@NgModule({
  declarations: [CalculationLoanPageComponent, CarInfoComponent],
  imports: [
    CommonModule,
    SideBarModule,
    ReactiveFormsModule,
    FormlyModule,
  ],
  exports: [CalculationLoanPageComponent, CarInfoComponent],
  bootstrap:[CalculationLoanPageComponent]
})
export class CalculationLoanPageModule {}