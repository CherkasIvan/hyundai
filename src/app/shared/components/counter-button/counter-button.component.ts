import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-counter-button',
  templateUrl: './counter-button.component.html',
  styleUrls: ['./counter-button.component.scss'],
})
export class CounterButtonComponent implements OnInit {
  @Input() initialState!: any;
  @Output() currentCountValue = new EventEmitter<number>();

  public initCounterForm() {
    this.initialState.formControl = new FormControl(
      this.initialState.actualCounter
    );
  }

  constructor() {}

  public decrementInputValue() {
    this.initialState.actualCounter <= 0
      ? this.initialState.actualCounter
      : this.initialState.actualCounter--;

    this.currentCountValue.emit(this.initialState.actualCounter);
  }

  public incrementInputValue() {
    this.initialState.actualCounter >= 10
      ? this.initialState.actualCounter
      : this.initialState.actualCounter++;

    this.currentCountValue.emit(this.initialState.actualCounter);
  }

  ngOnInit(): void {
    this.initCounterForm();
  }
}
