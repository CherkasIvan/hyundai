import { createFeatureSelector, createSelector } from '@ngrx/store';

import { UserAuthStateInterface } from '../../models/interfaces/user-auth-state.interface';
import { UserRegisterStateInterface } from '../../models/userRegisterStateInterface';

export const RegisterFeatureSelector =
  createFeatureSelector<UserRegisterStateInterface>('user-register');

export const isSubmittingRegisterSelector = createSelector(
  RegisterFeatureSelector,
  (authState: UserRegisterStateInterface) => authState.isSubmitting
);
export const validationRegisterErrorsSelector = createSelector(
  RegisterFeatureSelector,
  (authState: UserRegisterStateInterface) => authState.validationErrors
);
export const userIsRegister = createSelector(
  RegisterFeatureSelector,
  (authState: UserRegisterStateInterface) => authState.userIsRegister
);

export const AuthFeatureSelector =
  createFeatureSelector<UserAuthStateInterface>('user-auth');

export const isSubmittingAuthSelector = createSelector(
  AuthFeatureSelector,
  (authState: UserAuthStateInterface) => authState.isSubmitting
);
export const validationAuthErrorsSelector = createSelector(
  AuthFeatureSelector,
  (authState: UserAuthStateInterface) => authState.validationErrors
);
export const userIsLoggedIn = createSelector(
  AuthFeatureSelector,
  (authState: UserAuthStateInterface) => authState.userIsLoggedIn
);
