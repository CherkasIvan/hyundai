import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ApprovalComponent } from './components/approval/approval.component';
import { SummaryComponent } from './components/summary/summary.component';
import { UserInfoComponent } from './components/user-info/user-info.component';
import { WorkComponent } from './components/work/work.component';

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
