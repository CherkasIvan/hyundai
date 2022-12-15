import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {Routes} from '@angular/router';
import {NavigationModule} from '../../components/navigation/navigation.module';
import {ToolbarModule} from '../../components/toolbar/toolbar.module';
import {CalculationLoanPageModule} from '../../pages/calculation-loan-page/calculation-loan-page.module';
import {SideBarModule} from '../../pages/components/side-bar/side-bar.module';
import {DocumentsPaymentsPageModule} from '../../pages/documents-payments-page/documents-payments-page.module';
import {ProcessingPageModule} from '../../pages/processing-page/processing-page.module';
import {MainContainerPageComponent} from './main-container-page.component';
import {NavigationPageRoutingModule} from '../../components/navigation/navigation-page-routing.module';
import {MainContainerPageRoutingModule} from './main-container-page-routing.module';

@NgModule({
  declarations: [MainContainerPageComponent],
  imports: [
    CommonModule,
    ToolbarModule,
    NavigationModule,
    SideBarModule,
    NavigationPageRoutingModule,
    ProcessingPageModule,
    DocumentsPaymentsPageModule,
    MainContainerPageRoutingModule,
  ],
  exports: [MainContainerPageComponent, CalculationLoanPageModule],
  bootstrap: [MainContainerPageComponent],
})
export class MainContainerPageModule {}
