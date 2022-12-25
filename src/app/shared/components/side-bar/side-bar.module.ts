import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';

import { MatIconModule } from '@angular/material/icon';
import { MatStepperModule } from '@angular/material/stepper';
import { MatProgressBarModule } from '@angular/material/progress-bar';

import { SideBarComponent } from './side-bar.component';
import { SideBarRoutingModule } from './side-bar-routing.module';

@NgModule({
  declarations: [SideBarComponent],
  imports: [
    SideBarRoutingModule,
    RouterModule,
    CommonModule,
    MatProgressBarModule,
    MatStepperModule,
    MatIconModule,
  ],
  exports: [SideBarComponent],
  bootstrap: [SideBarComponent],
})
export class SideBarModule {}
