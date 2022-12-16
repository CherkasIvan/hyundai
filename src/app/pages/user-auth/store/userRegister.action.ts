import {BackendErrorsInterface} from '../../shared/types/backendErrors.interface';
import {createAction, props} from '@ngrx/store';
import {CurrentUserInterface} from '../types/currentUser.interface';
import {RegisterRequestInterface} from '../types/registerRequest.interface';

import {UserActionTypes} from './userActionTypes';

export const userAuthAction = createAction(
  UserActionTypes.USER_AUTH,
  props<{request: any}>()
);

export const userAuthSuccessAction = createAction(
  UserActionTypes.USER_AUTH_SUCCESS,
  props<{currentUser: CurrentUserInterface}>()
);

export const userAuthFailureAction = createAction(
  UserActionTypes.USER_AUTH_FAILURE,
  props<{errors: BackendErrorsInterface}>()
);
