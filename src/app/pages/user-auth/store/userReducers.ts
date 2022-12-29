import {Action, createReducer, on} from '@ngrx/store';

import {UserAuthStateInterface} from '../types/userAuthState.interface';

import {
  userAuthAction,
  userAuthFailureAction,
  userAuthSuccessAction,
} from './userRegister.action';

const initialState: UserAuthStateInterface = {
  isSubmitting: false,
  currentUser: null,
  userIsLoggedIn: false,
  validationErrors: null,
};

const authReducer = createReducer(
  initialState,
  on(
    userAuthAction,
    (state): UserAuthStateInterface => ({
      ...state,
      isSubmitting: true,
      validationErrors: null,
    })
  ),
  on(
    userAuthSuccessAction,
    (state, action): UserAuthStateInterface => ({
      ...state,
      isSubmitting: false,
      userIsLoggedIn: true,
      currentUser: action.currentUser,
    })
  ),
  on(
    userAuthFailureAction,
    (state, action): UserAuthStateInterface => ({
      ...state,
      isSubmitting: false,
      validationErrors: action.errors,
    })
  )
);

export function reducers(state: UserAuthStateInterface, action: Action) {
  return authReducer(state, action);
}
