import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CarInfoComponent } from 'src/app/pages/main-form-content/sub-pages/calculation-loan-page/components/car-info/car-info.component';
import { DriversComponent } from 'src/app/pages/main-form-content/sub-pages/calculation-loan-page/components/drivers/drivers.component';
import { InsurensesParamsComponent } from 'src/app/pages/main-form-content/sub-pages/calculation-loan-page/components/insurenses-params/insurenses-params.component';
import { LoanParamsComponent } from 'src/app/pages/main-form-content/sub-pages/calculation-loan-page/components/loan-params/loan-params.component';
import { OwnerComponent } from 'src/app/pages/main-form-content/sub-pages/calculation-loan-page/components/owner/owner.component';
import { ProductCalculationComponent } from 'src/app/pages/main-form-content/sub-pages/calculation-loan-page/components/product-calculation/product-calculation.component';
import { ApprovalComponent } from 'src/app/pages/main-form-content/sub-pages/processing-page/components/approval/approval.component';
import { SummaryComponent } from 'src/app/pages/main-form-content/sub-pages/processing-page/components/summary/summary.component';
import { UserInfoComponent } from 'src/app/pages/main-form-content/sub-pages/processing-page/components/user-info/user-info.component';
import { WorkComponent } from 'src/app/pages/main-form-content/sub-pages/processing-page/components/work/work.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'car_info', component: CarInfoComponent },
      { path: 'owner', component: OwnerComponent },
      { path: 'driver', component: DriversComponent },
      { path: 'loan_params', component: LoanParamsComponent },
      { path: 'insurenses_params', component: InsurensesParamsComponent },
      { path: 'product_calculation', component: ProductCalculationComponent },
      { path: 'user_info', component: UserInfoComponent },
      { path: 'work', component: WorkComponent },
      { path: 'summary', component: SummaryComponent },
      { path: 'approval', component: ApprovalComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SideBarRoutingModule {}
