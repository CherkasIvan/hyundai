import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';

import {MatButtonModule} from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatStepperModule} from '@angular/material/stepper';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatProgressBarModule} from '@angular/material/progress-bar';

import {ProgressBarComponent} from '../progress-bar/progress-bar.component';
import {SideBarComponent} from './side-bar.component';

@NgModule({
  declarations: [SideBarComponent, ProgressBarComponent],
  imports: [
    CommonModule,
    MatProgressBarModule,
    MatButtonModule,
    MatCheckboxModule,
    MatProgressBarModule,
    MatStepperModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatFormFieldModule,
    MatToolbarModule,
    MatIconModule,
    MatCheckboxModule,
  ],
  exports: [SideBarComponent, ProgressBarComponent],
  bootstrap: [SideBarComponent],
})
export class SideBarModule {}
