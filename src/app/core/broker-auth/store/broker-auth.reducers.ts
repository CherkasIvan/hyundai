import {Action, createReducer, on} from '@ngrx/store';

import {AuthStateInterface} from '../types/authState.interface';

import {
  authBrokerAction,
  authBrokerSuccessAction,
  authBrokerFailureAction,
} from './boker-auth.action';

const initialState: AuthStateInterface = {
  isSubmitting: false,
  currentBroker: null,
  isLoggedIn: null,
  validationErrors: null,
};

const authReducer = createReducer(
  initialState,
  on(
    authBrokerAction,
    (state): AuthStateInterface => ({
      ...state,
      isSubmitting: true,
      validationErrors: null,
    })
  ),
  on(
    authBrokerSuccessAction,
    (state, action): AuthStateInterface => ({
      ...state,
      isSubmitting: false,
      isLoggedIn: true,
      currentBroker: action.currentBroker,
    })
  ),
  on(
    authBrokerFailureAction,
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
