import {Action, createReducer, on} from '@ngrx/store';

import {BrokerAuthStateInterface} from '../types/BrokerAuthState.interface';

import {
  authBrokerAction,
  authBrokerSuccessAction,
  authBrokerFailureAction,
} from './broker-auth.action';

const initialState: BrokerAuthStateInterface = {
  isSubmitting: false,
  currentBroker: null,
  brokerIsLoggedIn: false,
  validationErrors: null,
};

const authReducer = createReducer(
  initialState,
  on(
    authBrokerAction,
    (state): BrokerAuthStateInterface => ({
      ...state,
      isSubmitting: true,
      validationErrors: null,
    })
  ),
  on(
    authBrokerSuccessAction,
    (state, action): BrokerAuthStateInterface => ({
      ...state,
      isSubmitting: false,
      brokerIsLoggedIn: true,
      currentBroker: action.currentBroker,
    })
  ),
  on(
    authBrokerFailureAction,
    (state, action): BrokerAuthStateInterface => ({
      ...state,
      isSubmitting: false,
      validationErrors: action.errors,
    })
  )
);

export function reducers(state: BrokerAuthStateInterface, action: Action) {
  return authReducer(state, action);
}
