import { createFeatureSelector, createSelector } from '@ngrx/store';

import { InputCleareType } from '../../types/input-clearer.type';

export const inputClearerFeatureSelector =
  createFeatureSelector<InputCleareType>('input-clearer');

export const getInputClearerValue = createSelector(
  inputClearerFeatureSelector,
  (state: InputCleareType) => state.inputValue
);
