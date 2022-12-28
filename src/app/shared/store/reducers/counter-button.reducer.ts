import { Action, createReducer, on } from '@ngrx/store';
import { CounterButtonInterface } from '../../types/counter-button.interface';
import {
  counterButtonDecreaseAction,
  counterButtonIncreaseAction,
} from '../actions/counter-button.action';

export const initialState: CounterButtonInterface = {
  counter: 0,
};

const counterButtonReducer = createReducer(
  initialState,
  on(counterButtonIncreaseAction, (state): CounterButtonInterface => {
    return {
      ...state,
      counter: state.counter >= 10 ? state.counter : state.counter + 1,
    };
  }),
  on(counterButtonDecreaseAction, (state): CounterButtonInterface => {
    return {
      ...state,
      counter: state.counter <= 0 ? state.counter : state.counter - 1,
    };
  })
);

export function reducers(state: CounterButtonInterface, action: Action) {
  return counterButtonReducer(state, action);
}

// this.initialCounter >= 10 ? this.initialCounter : this.initialCounter++;
// this.counterForm.get('counterFormInput')?.patchValue(this.initialCounter);
// this.currentCountValue.emit(this.initialCounter);
