import { createAction, props } from '@ngrx/store';
import { UserActionTypes } from './userActionTypes';

import { BackendErrorsInterface } from '../../../shared/models/types/backendErrors.type';
import { CurrentUserInterface } from '../models/currentUser.interface';
import { UserRegisterRequestInterface } from '../models/userRegisterRequest.interface';

// REGISTER NEW USER //

export const userRegisterAction = createAction(
  UserActionTypes.USER_REGISTER,
  props<{ request: UserRegisterRequestInterface }>()
);

export const userRegisterSuccessAction = createAction(
  UserActionTypes.USER_REGISTER_SUCCESS,
  props<{ currentUser: CurrentUserInterface }>()
);

export const userRegisterFailureAction = createAction(
  UserActionTypes.USER_REGISTER_FAILURE,
  props<{ errors: BackendErrorsInterface }>()
);

// AUTH USER //

export const userAuthAction = createAction(
  UserActionTypes.USER_AUTH,
  props<{ request: UserRegisterRequestInterface }>()
);

export const userAuthSuccessAction = createAction(
  UserActionTypes.USER_AUTH_SUCCESS,
  props<{ currentUser: CurrentUserInterface }>()
);

export const userAuthFailureAction = createAction(
  UserActionTypes.USER_AUTH_FAILURE,
  props<{ errors: BackendErrorsInterface }>()
);
