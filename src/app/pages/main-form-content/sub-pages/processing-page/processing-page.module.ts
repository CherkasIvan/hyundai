import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProcessingPageRoutingModule } from './processing-page-routing.module';
import { ProcessingPageComponent } from './processing-page.component';

import { SharedModule } from '../../../../shared/shared.module';
import { WorkComponent } from './components/work/work.component';
import { SummaryComponent } from './components/summary/summary.component';
import { ApprovalComponent } from './components/approval/approval.component';
import { UserInfoComponent } from './components/user-info/user-info.component';

@NgModule({
  declarations: [
    ProcessingPageComponent,
    UserInfoComponent,
    WorkComponent,
    SummaryComponent,
    ApprovalComponent,
  ],
  exports: [ProcessingPageComponent, UserInfoComponent],
  imports: [ProcessingPageRoutingModule, CommonModule, SharedModule],
})
export class ProcessingPageModule {}
