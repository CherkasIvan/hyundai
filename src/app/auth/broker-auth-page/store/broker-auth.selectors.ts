import { createFeatureSelector, createSelector } from '@ngrx/store';

import { BrokerAuthStateInterface } from './types/brokerAuthState.interface';

export const authBrokerFeatureSelector =
  createFeatureSelector<BrokerAuthStateInterface>('broker-auth');

export const isBrokerSubmittingSelector = createSelector(
  authBrokerFeatureSelector,
  (authState: BrokerAuthStateInterface) => authState.isBrokerSubmitting
);
export const validationBrokerErrorsSelector = createSelector(
  authBrokerFeatureSelector,
  (authState: BrokerAuthStateInterface) => authState.validationErrors
);
export const brokerIsLoggedIn = createSelector(
  authBrokerFeatureSelector,
  (authState: BrokerAuthStateInterface) => authState.brokerIsLoggedIn
);
