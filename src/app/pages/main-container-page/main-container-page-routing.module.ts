import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {CalculationLoanPageComponent} from './componets/calculation-loan-page/calculation-loan-page.component';
import {MainContainerPageComponent} from './main-container-page.component';

const routes: Routes = [
  {
    path: '',
    component: MainContainerPageComponent,
    children: [
      {path: 'loan-calculation', component: CalculationLoanPageComponent},
      {path: 'processing', component: CalculationLoanPageComponent},
      {path: 'documents-payments', component: CalculationLoanPageComponent},
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainContainerPageRoutingModule {}
