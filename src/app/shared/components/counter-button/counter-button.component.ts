import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import {
  counterButtonDecreaseAction,
  counterButtonIncreaseAction,
} from '../../store/actions/counter-button.action';
import { getCounterButtonValue } from '../../store/selectors/counter-button.selector';
import { CounterButtonInterface } from '../../types/counter-button.interface';

@Component({
  selector: 'app-counter-button',
  templateUrl: './counter-button.component.html',
  styleUrls: ['./counter-button.component.scss'],
})
export class CounterButtonComponent implements OnInit {
  public initialCounter$!: Observable<number>;
  @Output() public currentCountValue = new EventEmitter<number>();

  public counterForm!: FormGroup;

  public initializeForm(): void {
    this.counterForm = this._fb.group({
      counterFormInput: [this.initialCounter$],
    });
  }

  public initializeStoreValues(): void {
    this.initialCounter$ = this._store.pipe(select(getCounterButtonValue));
  }

  constructor(
    private _fb: FormBuilder,
    private readonly _store: Store<CounterButtonInterface>
  ) {}

  public decrementInputValue(): void {
    this._store.dispatch(counterButtonDecreaseAction());
  }

  public incrementInputValue(): void {
    this._store.dispatch(counterButtonIncreaseAction());
  }

  public ngOnInit(): void {
    this.initializeForm();
    this.initializeStoreValues();
  }
}
