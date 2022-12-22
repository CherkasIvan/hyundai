import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { MainFormContentPageRoutingModule } from './main-form-content-page-routing.module';

import { ModalService } from '../../shared/services/modal.service';

import { MainFormContentPageComponent } from './main-form-content-page.component';
import { MainFormHeaderComponent } from './componets/main-form-header/main-form-header.component';
import { SharedModule } from '../../shared/shared.module';
import { MatTabsModule } from '@angular/material/tabs';
import { CalculationLoanPageComponent } from './sub-pages/calculation-loan-page/calculation-loan-page.component';
import { CarInfoComponent } from './sub-pages/calculation-loan-page/components/car-info/car-info.component';

@NgModule({
  declarations: [
    MainFormHeaderComponent,
    MainFormContentPageComponent,
    CarInfoComponent,
    CalculationLoanPageComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    MainFormContentPageRoutingModule,
    SharedModule,
    MatTabsModule,
  ],
  providers: [ModalService],
  exports: [MainFormContentPageComponent],
  bootstrap: [MainFormContentPageComponent],
})
export class MainFormContentPageModule {}
