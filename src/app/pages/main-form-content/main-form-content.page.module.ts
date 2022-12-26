import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { MainFormContentPageRoutingModule } from './main-form-content-page-routing.module';

import { ModalService } from '../../shared/services/modal.service';

import { MainFormContentPageComponent } from './main-form-content-page.component';
import { MainFormHeaderComponent } from './componets/main-form-header/main-form-header.component';
import { SharedModule } from '../../shared/shared.module';
import { MatTabsModule } from '@angular/material/tabs';
import { SideBarComponent } from './componets/side-bar/side-bar.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatStepperModule } from '@angular/material/stepper';

@NgModule({
  declarations: [
    MainFormHeaderComponent,
    MainFormContentPageComponent,
    SideBarComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    MainFormContentPageRoutingModule,
    MatProgressBarModule,
    MatStepperModule,
    SharedModule,
    MatTabsModule,
  ],
  providers: [ModalService],
  exports: [MainFormContentPageComponent],
  bootstrap: [MainFormContentPageComponent],
})
export class MainFormContentPageModule {}
