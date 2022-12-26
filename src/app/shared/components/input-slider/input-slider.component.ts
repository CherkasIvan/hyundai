import { Component } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input-slider',
  templateUrl: './input-slider.component.html',
  styleUrls: ['./input-slider.component.scss'],
})
export class InputSliderComponent {
  @Output()
  componentValue:EventEmitter<number> = new EventEmitter<number>()
  
  min = 0;
  max = 9999999;
  step = 1;
  value = 0;

  public updateInputValue(event: any) {
    this.value = event.value;
    let value = this.value;
    this.emitComponentValue(value);

  }

  public updateSliderValue(event: any) {
    this.value = event.value;
    let value = this.value;
    this.emitComponentValue(value);
  }

  emitComponentValue(value: number) {
    this.componentValue.emit(value);
  }

  constructor() {}
}
