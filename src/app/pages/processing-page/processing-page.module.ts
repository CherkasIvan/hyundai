import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgpImagePickerModule } from 'ngp-image-picker';

import { ProcessingPageRoutingModule } from './processing-page-routing.module';
import { SharedModule } from '../../shared/shared.module';

import { WorkComponent } from './components/work/work.component';
import { SummaryComponent } from './components/summary/summary.component';
import { ApprovalComponent } from './components/approval/approval.component';
import { ClientInfoComponent } from './components/client-info/client-info.component';

@NgModule({
  declarations: [
    ClientInfoComponent,
    WorkComponent,
    SummaryComponent,
    ApprovalComponent,
  ],
  exports: [ClientInfoComponent],
  imports: [
    CommonModule,
    NgpImagePickerModule,
    ProcessingPageRoutingModule,
    SharedModule,
  ],
})
export class ProcessingPageModule {}
