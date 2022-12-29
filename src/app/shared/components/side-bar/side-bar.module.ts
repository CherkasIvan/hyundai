import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MatIconModule } from '@angular/material/icon';
import { MatStepperModule } from '@angular/material/stepper';
import { MatProgressBarModule } from '@angular/material/progress-bar';

import { ProgressBarComponent } from '../progress-bar/progress-bar.component';
import { SideBarComponent } from './side-bar.component';

@NgModule({
  declarations: [SideBarComponent, ProgressBarComponent],
  imports: [
    CommonModule,
    MatProgressBarModule,
    MatStepperModule,
    MatIconModule,
  ],
  exports: [SideBarComponent, ProgressBarComponent],
  bootstrap: [SideBarComponent],
})
export class SideBarModule {}
