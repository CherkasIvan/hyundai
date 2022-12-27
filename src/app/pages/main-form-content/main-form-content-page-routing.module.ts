import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainFormContentPageComponent } from './main-form-content-page.component';

const routes: Routes = [
  {
    path: '',
    component: MainFormContentPageComponent,
    children: [
      {
        path: 'loan-calculation',
        loadChildren: () =>
          import(
            './sub-pages/calculation-loan-page/calculation-loan-page.module'
          ).then((module) => module.CalculationLoanPageModule),
      },
      {
        path: 'processing',
        loadChildren: () =>
          import('./sub-pages/processing-page/processing-page.module').then(
            (module) => module.ProcessingPageModule
          ),
      },
      {
        path: 'documents-payments',
        loadChildren: () =>
          import(
            './sub-pages/documents-payments-page/documents-payments-page.module'
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
