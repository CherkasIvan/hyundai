import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { _reducers } from '.';
import { CalculationLoanPageEffects } from './calculationLoanPage.effects';

@NgModule({
  imports: [
    StoreModule.forFeature('CascoPolicies', _reducers.casco),
    EffectsModule.forFeature([CalculationLoanPageEffects]),
  ],
  exports: [StoreModule]
})
export class StorageModule { }
