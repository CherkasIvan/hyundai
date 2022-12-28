import { createFeatureSelector, createSelector } from '@ngrx/store';

import { CounterButtonInterface } from '../../types/counter-button.interface';

export const counterButtonFeatureSelector =
  createFeatureSelector<CounterButtonInterface>('counter-button');

export const getCounterButtonValue = createSelector(
  counterButtonFeatureSelector,
  (state: CounterButtonInterface) => state.counter
);
