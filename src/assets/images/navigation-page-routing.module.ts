import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalculationLoanPageComponent } from '../../pages/calculation-loan-page/calculation-loan-page.component';
import { DocumentsPaymentsPageComponent } from '../../pages/documents-payments-page/documents-payments-page.component';
import { ProcessingPageComponent } from '../../pages/processing-page/processing-page.component';

const routes: Routes = [
  {
    path:'loan-calculation',
    component:CalculationLoanPageComponent,
    children: [
      {
        path: '', loadChildren: () => import('../../pages/calculation-loan-page/calculation-loan-page.module')
          .then(module => module.CalculationLoanPageModule)
      },
    ]
  },
  {
    path:'processing',
    component:ProcessingPageComponent,
    children: [
      {
        path: '', loadChildren: () => import('../../pages/processing-page/processing-page.module')
          .then(module => module.ProcessingPageModule)
      },
    ]
  },
  {
    path:'documents-payments',
    component:DocumentsPaymentsPageComponent,
    children: [
      {
        path: '', loadChildren: () => import('../../pages/documents-payments-page/documents-payments-page.module')
          .then(module => module.DocumentsPaymentsPageModule)
      },
    ]
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'register',
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NavigationPageRoutingModule { }
