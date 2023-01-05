import { Action, createReducer, on } from '@ngrx/store';

import {
  authBrokerAction,
  authBrokerSuccessAction,
  authBrokerFailureAction,
} from './broker-auth.action';

import { BrokerAuthStateInterface } from '../models/interfaces/broker-auth-state.interface';

const initialState: BrokerAuthStateInterface = {
  isBrokerSubmitting: false,
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
      isBrokerSubmitting: true,
      validationErrors: null,
    })
  ),
  on(
    authBrokerSuccessAction,
    (state, action): BrokerAuthStateInterface => ({
      ...state,
      isBrokerSubmitting: false,
      brokerIsLoggedIn: true,
      currentBroker: action.currentBroker,
    })
  ),
  on(
    authBrokerFailureAction,
    (state, action): BrokerAuthStateInterface => ({
      ...state,
      isBrokerSubmitting: false,
      validationErrors: action.errors,
    })
  )
);

export function reducers(state: BrokerAuthStateInterface, action: Action) {
  return authReducer(state, action);
}
