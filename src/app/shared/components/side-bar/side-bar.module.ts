import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';

import { MatIconModule } from '@angular/material/icon';
import { MatStepperModule } from '@angular/material/stepper';
import { MatProgressBarModule } from '@angular/material/progress-bar';

import { ProgressBarComponent } from '../progress-bar/progress-bar.component';
import { SideBarComponent } from './side-bar.component';
import { SideBarRoutingModule } from './side-bar-routing.module';

@NgModule({
  declarations: [SideBarComponent, ProgressBarComponent],
  imports: [
    SideBarRoutingModule,
    RouterModule,
    CommonModule,
    MatProgressBarModule,
    MatStepperModule,
    MatIconModule,
  ],
  exports: [SideBarComponent, ProgressBarComponent],
  bootstrap: [SideBarComponent],
})
export class SideBarModule {}
