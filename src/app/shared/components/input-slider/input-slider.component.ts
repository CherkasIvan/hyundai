import { Component } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

import { MatSliderChange } from '@angular/material/slider';

@Component({
  selector: 'app-input-slider',
  templateUrl: './input-slider.component.html',
  styleUrls: ['./input-slider.component.scss'],
})
export class InputSliderComponent {
  @Output() public componentValue: EventEmitter<number | string> =
    new EventEmitter<number | string>();
  public min: number = 0;
  public max: number = 15000000;
  public step: number = 500;
  public value: number | string = 0;

  public updateInputValue(event: MatSliderChange) {
    if (event.value) {
      this.value = event.value;
      this.componentValue.emit(this.value);
    }
  }

  public updateSliderValue(event: Event) {
    if (event.target) {
      this.value = (event.target as HTMLInputElement).value;
      this.componentValue.emit(this.value);
    }
  }

  constructor() {}
}
