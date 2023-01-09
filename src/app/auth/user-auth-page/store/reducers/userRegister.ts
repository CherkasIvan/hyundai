import { Action, createReducer, on } from '@ngrx/store';

import { UserRegisterStateInterface } from '../../models/userRegisterStateInterface';

import {
  userRegisterAction,
  userRegisterFailureAction,
  userRegisterSuccessAction,
} from '../actions/userRegister.action';

const initialState: UserRegisterStateInterface = {
  isSubmitting: false,
  currentUser: null,
  userIsRegister: false,
  validationErrors: null,
};

const registerReducer = createReducer(
  initialState,
  on(
    userRegisterAction,
    (state): UserRegisterStateInterface => ({
      ...state,
      isSubmitting: true,
      validationErrors: null,
    })
  ),
  on(
    userRegisterSuccessAction,
    (state, action): UserRegisterStateInterface => ({
      ...state,
      isSubmitting: false,
      userIsRegister: true,
      currentUser: action.currentUser,
    })
  ),
  on(
    userRegisterFailureAction,
    (state, action): UserRegisterStateInterface => ({
      ...state,
      isSubmitting: false,
      validationErrors: action.errors,
    })
  )
);

export function reducers(state: UserRegisterStateInterface, action: Action) {
  return registerReducer(state, action);
}
