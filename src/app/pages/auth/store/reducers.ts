import {Action, createReducer, on} from '@ngrx/store';

import {AuthStateInterface} from '../types/authState.interface';

import {
  registerAction,
  registerFailureAction,
  registerSuccessAction,
} from './register.action';

const initialState: AuthStateInterface = {
  isSubmitting: false,
  currentUser: null,
  userIsLoggedIn: null,
  validationErrors: null,
};

const authReducer = createReducer(
  initialState,
  on(
    registerAction,
    (state): AuthStateInterface => ({
      ...state,
      isSubmitting: true,
      validationErrors: null,
    })
  ),
  on(
    registerSuccessAction,
    (state, action): AuthStateInterface => ({
      ...state,
      isSubmitting: false,
      userIsLoggedIn: true,
      currentUser: action.currentUser,
    })
  ),
  on(
    registerFailureAction,
    (state, action): AuthStateInterface => ({
      ...state,
      isSubmitting: false,
      validationErrors: action.errors,
    })
  )
);

export function reducers(state: AuthStateInterface, action: Action) {
  return authReducer(state, action);
}
