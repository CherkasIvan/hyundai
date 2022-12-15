import {createFeatureSelector, createSelector} from '@ngrx/store';
import {AppStateInterface} from '../../../pages/shared/types/appState.interface';
import {AuthStateInterface} from '../types/authState.interface';

export const authFeatureSelector =
  createFeatureSelector<AuthStateInterface>('register');

export const isSubmittingSelector = createSelector(
  authFeatureSelector,
  (authState: AuthStateInterface) => authState.isSubmitting
);
export const validationErrorsSelector = createSelector(
  authFeatureSelector,
  (authState: AuthStateInterface) => authState.validationErrors
);

export const isLoggedIn = createSelector(
  authFeatureSelector,
  (authState: AuthStateInterface) => authState.isLoggedIn
);
