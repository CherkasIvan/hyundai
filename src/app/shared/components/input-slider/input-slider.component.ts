import { Component, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

import { MatSliderChange } from '@angular/material/slider';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { getInputClearerValue } from '../../store/selectors/input-clearer.selector';

@Component({
  selector: 'app-input-slider',
  templateUrl: './input-slider.component.html',
  styleUrls: ['./input-slider.component.scss'],
})
export class InputSliderComponent implements OnInit {
  @Output() public componentValue: EventEmitter<number | string> =
    new EventEmitter<number | string>();
  public min: number = 0;
  public max: number = 9999999;
  public step: number = 1;
  public value$!: Observable<number | string>;

  public initializeStoreValues(): void {
    this.value$ = this._store.pipe(select(getInputClearerValue));
    // this.initialCounter$.subscribe((counterValue: number): void => {
    //   this.currentCountValue.emit(counterValue);
    // });
  }

  public updateInputValue(event: MatSliderChange) {
    if (event.value) {
      // this.value = event.value;
      // this.componentValue.emit(this.value);
    }
  }

  public updateSliderValue(event: Event) {
    if (event.target) {
      // this.value = (event.target as HTMLInputElement).value;
      // this.componentValue.emit(this.value);
    }
  }

  constructor(private readonly _store: Store) {}

  public ngOnInit(): void {
    this.initializeStoreValues();
  }
}
