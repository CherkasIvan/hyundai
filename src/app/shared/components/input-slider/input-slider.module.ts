import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputSliderComponent } from './input-slider.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSliderModule } from '@angular/material/slider';
import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
  declarations: [InputSliderComponent],
  exports: [InputSliderComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatSliderModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
  ],
})
export class InputSliderModule {}
