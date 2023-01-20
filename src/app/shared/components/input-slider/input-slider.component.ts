import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

import { MatSliderChange } from '@angular/material/slider';

import { select, Store } from '@ngrx/store';

import { Observable } from 'rxjs';

import { InputValueType } from '../../models/types/inputValue.type';
import { inputSliderChangeValueAction } from '../../store/actions/input-slider.actions';
import { getInputSliderValue } from '../../store/selectors/input-slider-selector';

@Component({
  selector: 'tes-input-slider',
  templateUrl: './input-slider.component.html',
  styleUrls: ['./input-slider.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InputSliderComponent implements OnInit, OnChanges {
  @Input()
  currentValue!: number | string;

  @Output() public componentValue: EventEmitter<number | string> =
    new EventEmitter<number | string>();

  public initialValue$!: Observable<number | string>;
  public min: number = 0;
  public max: number = 15000000;
  public step: number = 500;
  public value: number | string = 0;

  public initializeStoreValues(): void {
    this.initialValue$ = this._store$.pipe(select(getInputSliderValue));

    this.initialValue$.subscribe((el) => this.componentValue.emit(el));
    this.componentValue.emit(this.value);
  }

  public updateInputValue(event: MatSliderChange): void {
    if (event.value) {
      this.value = event.value;
      const value = this.value;
      this._store$.dispatch(inputSliderChangeValueAction({ value }));
      this.componentValue.emit(value);
    } else {
      const value = this.value;
      this._store$.dispatch(inputSliderChangeValueAction({ value }));
      this.componentValue.emit(value);
    }
  }

  public updateSliderValue(event: Event): void {
    if (event.target) {
      this.value = (event.target as HTMLInputElement).value;
      const value = this.value;
      this._store$.dispatch(inputSliderChangeValueAction({ value }));
      this.componentValue.emit(value);
    } else {
      const value = this.value;
      this._store$.dispatch(inputSliderChangeValueAction({ value }));
      this.componentValue.emit(value);
    }
  }

  constructor(private readonly _store$: Store<InputValueType>) {}

  ngOnInit(): void {
    this.initializeStoreValues();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(changes['currentValue'].currentValue) {
      let value: number | string = changes['currentValue'].currentValue;
      this._store$.dispatch(inputSliderChangeValueAction({ value }));
      this.value = value;
    }
  }
}
