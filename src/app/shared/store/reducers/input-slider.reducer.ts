import { Action, createReducer, on, props } from '@ngrx/store';

import { InputValueType } from '../../models/types/inputValue.type';
import { inputSliderChangeValueAction } from '../actions/input-slider.actions';

export const initialState: InputValueType = {
  inputValue: 0,
};

const inputSliderReducer = createReducer(
  initialState,
  on(inputSliderChangeValueAction, (state, action): InputValueType => {
    return {
      ...state,
      inputValue: action.value,
    };
  })
);

export function sliderReducers(state: InputValueType, action: Action) {
  return inputSliderReducer(state, action);
}
