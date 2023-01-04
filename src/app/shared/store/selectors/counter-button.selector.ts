import { createFeatureSelector, createSelector } from '@ngrx/store';

import { CounterType } from '../../models/types/counter.type';

export const counterButtonFeatureSelector =
  createFeatureSelector<CounterType>('counter-button');

export const getCounterButtonValue = createSelector(
  counterButtonFeatureSelector,
  (state: CounterType) => state.counter
);
