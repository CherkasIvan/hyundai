import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-counter-button',
  templateUrl: './counter-button.component.html',
  styleUrls: ['./counter-button.component.scss'],
})
export class CounterButtonComponent implements OnInit {
  public initialCounter: number = 0;
  @Output() public currentCountValue = new EventEmitter<number>();

  public counterForm!: FormGroup;

  public initializeForm(): void {
    this.counterForm = this._fb.group({
      counterFormInput: [this.initialCounter],
    });
  }

  constructor(private _fb: FormBuilder) {}

  public decrementInputValue() {
    this.initialCounter <= 0 ? this.initialCounter : this.initialCounter--;
    this.counterForm.get('counterFormInput')?.patchValue(this.initialCounter);
    this.currentCountValue.emit(this.initialCounter);
  }

  public incrementInputValue() {
    this.initialCounter >= 10 ? this.initialCounter : this.initialCounter++;
    this.counterForm.get('counterFormInput')?.patchValue(this.initialCounter);
    this.currentCountValue.emit(this.initialCounter);
  }

  ngOnInit(): void {
    this.initializeForm();
  }
}
