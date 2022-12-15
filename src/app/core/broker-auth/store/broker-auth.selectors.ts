import {createFeatureSelector, createSelector} from '@ngrx/store';
import {BrokerAuthStateInterface} from '../types/BrokerAuthState.interface';

export const authFeatureSelector =
  createFeatureSelector<BrokerAuthStateInterface>('broker-auth');

export const isSubmittingSelector = createSelector(
  authFeatureSelector,
  (authState: BrokerAuthStateInterface) => authState.isSubmitting
);
export const validationErrorsSelector = createSelector(
  authFeatureSelector,
  (authState: BrokerAuthStateInterface) => authState.validationErrors
);
export const brokerIsLoggedIn = createSelector(
  authFeatureSelector,
  (authState: BrokerAuthStateInterface) => authState.brokerIsLoggedIn
);
