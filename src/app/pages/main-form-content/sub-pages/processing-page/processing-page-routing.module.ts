import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ApprovalComponent } from 'src/app/pages/main-form-content/sub-pages/processing-page/components/approval/approval.component';
import { SummaryComponent } from 'src/app/pages/main-form-content/sub-pages/processing-page/components/summary/summary.component';
import { UserInfoComponent } from 'src/app/pages/main-form-content/sub-pages/processing-page/components/user-info/user-info.component';
import { WorkComponent } from 'src/app/pages/main-form-content/sub-pages/processing-page/components/work/work.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'client-info', component: UserInfoComponent },
      { path: 'client-job', component: WorkComponent },
      { path: 'client-summary', component: SummaryComponent },
      { path: 'client-approval', component: ApprovalComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProcessingPageRoutingModule {}
