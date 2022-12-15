import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { NavigationModule } from '../../components/navigation/navigation.module';
import { ToolbarModule } from '../../components/toolbar/toolbar.module';
import { CalculationLoanPageModule } from '../../pages/calculation-loan-page/calculation-loan-page.module';
import { SideBarModule } from '../../pages/components/side-bar/side-bar.module';
import { DocumentsPaymentsPageModule } from '../../pages/documents-payments-page/documents-payments-page.module';
import { ProcessingPageModule } from '../../pages/processing-page/processing-page.module';
import { MainContainerPageComponent } from './main-container-page.component';
import { NavigationPageRoutingModule } from '../../components/navigation/navigation-page-routing.module';

const routes: Routes = [
  // { path: '', loadChildren: () => import('../app/core/auth/auth.module')
  //     .then(module => module.AuthModule)
  // },
  // { path: 'main', loadChildren: () => import('../app/core-pages/main-container-page/main-container-page.module')
  //     .then(module => module.MainContainerPageModule)
  // },
];

@NgModule({
  declarations: [MainContainerPageComponent],
  imports: [
    CommonModule,
    ToolbarModule,
    NavigationModule,
    SideBarModule,
    NavigationPageRoutingModule,
    ProcessingPageModule,
    DocumentsPaymentsPageModule
  ],
  exports: [MainContainerPageComponent, CalculationLoanPageModule],
  bootstrap:[MainContainerPageComponent]
})
export class MainContainerPageModule {}