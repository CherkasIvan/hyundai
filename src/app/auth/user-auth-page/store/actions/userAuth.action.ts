// AUTH USER //

import { createAction, props } from '@ngrx/store';

import { UserActionTypes } from '../../types/userActionTypes';

import { BackendErrorsInterface } from '../../../../shared/types/backendErrors.interface';
import { CurrentUserInterface } from '../../types/currentUser.interface';
import { UserRegisterRequestInterface } from '../../types/userRegisterRequest.interface';

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
