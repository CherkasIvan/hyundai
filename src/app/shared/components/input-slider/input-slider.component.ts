import { Component } from '@angular/core';
import { MatSliderChange } from '@angular/material/slider';

@Component({
  selector: 'app-input-slider',
  templateUrl: './input-slider.component.html',
  styleUrls: ['./input-slider.component.scss'],
})
export class InputSliderComponent {
  public min: number = 0;
  public max: number = 9999999;
  public step: number = 1;
  public value: number | null | string = 0;

  public updateInputValue(event: MatSliderChange) {
    this.value = event.value;
  }

  public updateSliderValue(event: Event) {
    this.value = (event.target as HTMLInputElement).value;
  }

  constructor() {}
}
