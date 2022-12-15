import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatStepperModule } from '@angular/material/stepper';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ProgressBarComponent } from '../progress-bar/progress-bar.component';
import { StepsComponent } from '../steps/steps.component';
import { SideBarComponent } from './side-bar.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';

@NgModule({
  declarations: [SideBarComponent, ProgressBarComponent, StepsComponent],
  imports: [
    CommonModule,
    MatProgressBarModule,
    MatButtonModule, MatCheckboxModule, MatProgressBarModule,
    MatStepperModule, ReactiveFormsModule, MatFormFieldModule, MatFormFieldModule,
    MatToolbarModule,
    MatIconModule,
    MatCheckboxModule,
  ],
  exports: [SideBarComponent, ProgressBarComponent, StepsComponent],
  bootstrap:[SideBarComponent]
})
export class SideBarModule {}