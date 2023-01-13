import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { routingPathEnum } from '../../shared/consts/routing-path-enum';

import { MainFormContentPageComponent } from './main-form-content-page.component';

const routes: Routes = [
  {
    path: ':client_id',
    component: MainFormContentPageComponent,
    children: [
      {
        path: routingPathEnum.LoanCalculationPage,
        loadChildren: () =>
          import('../calculation-loan-page/calculation-loan-page.module').then(
            (module) => module.CalculationLoanPageModule
          ),
      },
      {
        path: routingPathEnum.ProcessingPage,
        loadChildren: () =>
          import('../processing-page/processing-page.module').then(
            (module) => module.ProcessingPageModule
          ),
      },
      {
        path: routingPathEnum.DocumentsAndPaymentsPage,
        loadChildren: () =>
          import(
            '../documents-payments-page/documents-payments-page.module'
          ).then((module) => module.DocumentsPaymentsPageModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainFormContentPageRoutingModule {}
