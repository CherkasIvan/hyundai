import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { reducers } from './store/calculationLoanPageReducers';
import { CalculationLoanPageEffects } from './store/calculationLoanPage.effects';

import { MatTableModule } from '@angular/material/table';

import { CalculationLoanPageRoutingModule } from './calculation-loan-page-routing.module';
import { SharedModule } from '../../shared/shared.module';

import { ClientDataService } from '../../shared/services/client-data.service';
import { ClientAuthService } from 'src/app/auth/user-filter-page/services/client-auth.service';

import { CarInfoComponent } from './components/car-info/car-info.component';
import { OwnerComponent } from './components/owner/owner.component';
import { DriversPageComponent } from './components/drivers/drivers-page.component';
import { LoanParamsComponent } from './components/loan-params/loan-params.component';
import { DriversContentComponent } from './components/drivers/drivers-content/drivers-content.component';
import { InsurancePolicyCalculationDialog } from './components/product-calculation/dialogs/insurance-policy-calculation-dialog/insurance-policy-calculation-dialog.component';
import { InsurancePolicyCardComponent } from './components/product-calculation/dialogs/insurance-policy-calculation-dialog/insurance-policy-card/insurance-policy-card.component';
import { InsurancePolicyOptionsComponent } from './components/product-calculation/dialogs/insurance-policy-calculation-dialog/insurance-policy-options/insurance-policy-options.component';
import { ProductCalculationPageComponent } from './components/product-calculation/product-calculation-page.component';
import { ProductCalculationTableComponent } from './components/product-calculation/product-calculation-table/product-calculation-table.component';
import { StorageModule } from './store/storage.module';
import { _reducers } from './store';
import { InsurancesParamsComponent } from './components/insurances-params/insurances-params.component';
import { LoanOfferComponent } from './components/loan-params/components/loan-offer/loan-offer.component';

@NgModule({
  declarations: [
    CarInfoComponent,
    OwnerComponent,
    DriversPageComponent,
    LoanParamsComponent,
    InsurancesParamsComponent,
    DriversContentComponent,
    InsurancePolicyCalculationDialog,
    InsurancePolicyCardComponent,
    InsurancePolicyOptionsComponent,
    ProductCalculationPageComponent,
    ProductCalculationTableComponent,
    LoanOfferComponent,
  ],
  exports: [CarInfoComponent],
  imports: [
    CommonModule,
    CalculationLoanPageRoutingModule,
    SharedModule,
    StoreModule.forFeature('calculationLoanPage', reducers),
    StoreModule.forFeature('casco', _reducers.casco),
    EffectsModule.forFeature([CalculationLoanPageEffects]),
    // StorageModule,
    MatTableModule,
  ],
  providers: [ClientDataService, ClientAuthService],
})
export class CalculationLoanPageModule {}
