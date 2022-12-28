import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CalculationLoanPageRoutingModule } from './calculation-loan-page-routing.module';
import { SharedModule } from '../../shared/shared.module';

import { CarInfoComponent } from './components/car-info/car-info.component';
import { OwnerComponent } from './components/owner/owner.component';
import { DriversComponent } from './components/drivers/drivers.component';
import { LoanParamsComponent } from './components/loan-params/loan-params.component';
import { InsurensesParamsComponent } from './components/insurenses-params/insurenses-params.component';
import { ProductCalculationComponent } from './components/product-calculation/product-calculation.component';
import { StoreModule } from '@ngrx/store';
import { reducers } from './store/calculationLoanPageReducers';
import { EffectsModule } from '@ngrx/effects';
import { CalcultionLoanPageEffects } from './store/calculationLoanPage.effects';
import { ClientDataService } from 'src/app/shared/services/client-data.service';

@NgModule({
  declarations: [
    CarInfoComponent,
    OwnerComponent,
    DriversComponent,
    LoanParamsComponent,
    InsurensesParamsComponent,
    ProductCalculationComponent,
  ],
  exports: [CarInfoComponent],
  imports: [
    CommonModule, 
    CalculationLoanPageRoutingModule, 
    SharedModule, 
    StoreModule.forFeature('calculationLoanPage', reducers), 
    EffectsModule.forFeature([CalcultionLoanPageEffects]),],
    providers: [ClientDataService]
})
export class CalculationLoanPageModule {}
