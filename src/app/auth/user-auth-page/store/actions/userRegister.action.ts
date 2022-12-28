import { createAction, props } from '@ngrx/store';

import { UserActionTypes } from '../../types/userActionTypes';

import { BackendErrorsInterface } from '../../../../shared/types/backendErrors.interface';
import { CurrentUserInterface } from '../../types/currentUser.interface';
import { UserRegisterRequestInterface } from '../../types/userRegisterRequest.interface';

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
