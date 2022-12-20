import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { MainFormContentPageRoutingModule } from './main-form-content-page-routing.module';

import { ModalService } from '../../shared/services/modal.service';

import { MainFormContentPageComponent } from './main-form-content-page.component';
import { MainFormHeaderComponent } from './componets/main-form-header/main-form-header.component';
import { CalculationLoanPageModule } from './sub-pages/calculation-loan-page/calculation-loan-page.module';
import { SharedModule } from '../../shared/shared.module';
import { DocumentsPaymentsPageModule } from './sub-pages/documents-payments-page/documents-payments-page.module';
import { ProcessingPageModule } from './sub-pages/processing-page/processing-page.module';

@NgModule({
  declarations: [MainFormHeaderComponent, MainFormContentPageComponent],
  imports: [
    CommonModule,
    CalculationLoanPageModule,
    DocumentsPaymentsPageModule,
    ProcessingPageModule,
    RouterModule,
    MainFormContentPageRoutingModule,
    SharedModule,
  ],
  providers: [ModalService],
  exports: [MainFormContentPageComponent],
  bootstrap: [MainFormContentPageComponent],
})
export class MainFormContentPageModule {}
