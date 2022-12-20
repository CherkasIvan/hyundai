import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppStateInterface } from '../../../shared/types/appState.interface';
import { UserAuthStateInterface } from '../types/userAuthState.interface';

export const authFeatureSelector =
  createFeatureSelector<UserAuthStateInterface>('user-auth');

export const isSubmittingSelector = createSelector(
  authFeatureSelector,
  (authState: UserAuthStateInterface) => authState.isSubmitting
);
export const validationErrorsSelector = createSelector(
  authFeatureSelector,
  (authState: UserAuthStateInterface) => authState.validationErrors
);
export const userIsLoggedIn = createSelector(
  authFeatureSelector,
  (authState: UserAuthStateInterface) => authState.userIsLoggedIn
);
