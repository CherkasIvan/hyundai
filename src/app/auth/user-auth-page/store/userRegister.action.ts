import { createAction, props } from '@ngrx/store';
import { UserActionTypes } from './userActionTypes';

import { CurrentUserInterface } from '../models/interfaces/current-user.interface';
import { UserRegisterRequestType } from '../models/types/user-register-request.type';
import { BackendErrorsType } from '../../../shared/models/types/backendErrors.type';

// REGISTER NEW USER //

export const userRegisterAction = createAction(
  UserActionTypes.USER_REGISTER,
  props<{ request: UserRegisterRequestType }>()
);

export const userRegisterSuccessAction = createAction(
  UserActionTypes.USER_REGISTER_SUCCESS,
  props<{ currentUser: CurrentUserInterface }>()
);

export const userRegisterFailureAction = createAction(
  UserActionTypes.USER_REGISTER_FAILURE,
  props<{ errors: BackendErrorsType }>()
);

// AUTH USER //

export const userAuthAction = createAction(
  UserActionTypes.USER_AUTH,
  props<{ request: UserRegisterRequestType }>()
);

export const userAuthSuccessAction = createAction(
  UserActionTypes.USER_AUTH_SUCCESS,
  props<{ currentUser: CurrentUserInterface }>()
);

export const userAuthFailureAction = createAction(
  UserActionTypes.USER_AUTH_FAILURE,
  props<{ errors: BackendErrorsType }>()
);
