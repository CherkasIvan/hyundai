import { Action, createReducer, on } from '@ngrx/store';

import { InputCleareType } from '../../types/input-clearer.type';

import {
  inputClearerAddTextAction,
  inputClearerClearTextAction,
  inputClearerDeleteTextAction,
} from '../actions/input-clearer.action';

export const initialInputState: InputCleareType = {
  inputValue: '',
};

const inputClearerReducer = createReducer(
  initialInputState,
  on(inputClearerAddTextAction, (state): InputCleareType => {
    return {
      ...state,
      inputValue: state.inputValue,
    };
  }),
  on(inputClearerDeleteTextAction, (state): InputCleareType => {
    return {
      ...state,
      inputValue: state.inputValue,
    };
  }),
  on(inputClearerClearTextAction, (state): InputCleareType => {
    return {
      ...state,
      inputValue: (state.inputValue = ''),
    };
  })
);

export function clearerReducers(state: InputCleareType, action: Action) {
  return inputClearerReducer(state, action);
}
