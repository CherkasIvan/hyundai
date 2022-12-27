import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProcessingPageRoutingModule } from './processing-page-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';

import { WorkComponent } from './components/work/work.component';
import { SummaryComponent } from './components/summary/summary.component';
import { ApprovalComponent } from './components/approval/approval.component';
import { UserInfoComponent } from './components/user-info/user-info.component';

@NgModule({
  declarations: [
    UserInfoComponent,
    WorkComponent,
    SummaryComponent,
    ApprovalComponent,
  ],
  exports: [UserInfoComponent],
  imports: [CommonModule, ProcessingPageRoutingModule, SharedModule],
})
export class ProcessingPageModule {}
