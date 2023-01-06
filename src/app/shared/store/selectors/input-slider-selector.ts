import { createFeatureSelector, createSelector } from '@ngrx/store';

import { InputValueType } from '../../models/types/inputValue.type';

export const inputSliderFeatureSelector =
  createFeatureSelector<InputValueType>('input-slider');

export const getInputSliderValue = createSelector(
  inputSliderFeatureSelector,
  (state: InputValueType) => state.inputValue
);
