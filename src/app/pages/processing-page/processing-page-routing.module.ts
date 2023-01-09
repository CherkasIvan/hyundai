import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { routingPathEnum } from '../../shared/consts/routing-path-enum';

import { ApprovalComponent } from './components/approval/approval.component';
import { SummaryComponent } from './components/summary/summary.component';
import { ClientInfoComponent } from './components/client-info/client-info.component';
import { WorkComponent } from './components/work/work.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: routingPathEnum.ClientInfo, component: ClientInfoComponent },
      { path: routingPathEnum.ClientJobData, component: WorkComponent },
      { path: routingPathEnum.ClientSummary, component: SummaryComponent },
      { path: routingPathEnum.ClientApproval, component: ApprovalComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProcessingPageRoutingModule {}
