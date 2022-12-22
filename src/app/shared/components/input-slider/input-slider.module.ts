import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputSliderComponent } from './input-slider.component';
import { RangeSliderDirective } from './directives/range-slider.directive';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [InputSliderComponent, RangeSliderDirective],
  exports: [InputSliderComponent, RangeSliderDirective],
  imports: [CommonModule, ReactiveFormsModule],
})
export class InputSliderModule {}
