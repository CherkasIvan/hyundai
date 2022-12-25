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
export class ProcessingPageRoutingModule {}
