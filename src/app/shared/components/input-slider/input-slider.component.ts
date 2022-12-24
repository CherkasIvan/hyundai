import { Component } from '@angular/core';

@Component({
  selector: 'app-input-slider',
  templateUrl: './input-slider.component.html',
  styleUrls: ['./input-slider.component.scss'],
})
export class InputSliderComponent {
  min = 0;
  max = 9999999;
  step = 1;
  value = 0;

  public updateInputValue(event: any) {
    this.value = event.value;
  }

  public updateSliderValue(event: any) {
    this.value = event.value;
  }

  constructor() {}
}
