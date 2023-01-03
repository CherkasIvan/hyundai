import { Action, createReducer, on } from '@ngrx/store';

import {
  counterButtonDecreaseAction,
  counterButtonIncreaseAction,
} from '../actions/counter-button.action';

import { CounterType } from '../../models/types/counter.type';

export const initialState: CounterType = {
  counter: 0,
};

const counterButtonReducer = createReducer(
  initialState,
  on(counterButtonIncreaseAction, (state): CounterType => {
    return {
      ...state,
      counter: state.counter >= 10 ? state.counter : state.counter + 1,
    };
  }),
  on(counterButtonDecreaseAction, (state): CounterType => {
    return {
      ...state,
      counter: state.counter <= 0 ? state.counter : state.counter - 1,
    };
  })
);

export function reducers(state: CounterType, action: Action) {
  return counterButtonReducer(state, action);
}

// this.initialCounter >= 10 ? this.initialCounter : this.initialCounter++;
// this.counterForm.get('counterFormInput')?.patchValue(this.initialCounter);
// this.currentCountValue.emit(this.initialCounter);
