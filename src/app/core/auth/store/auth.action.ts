import {createAction, props} from '@ngrx/store';

import {BackendErrorsInterface} from './../../../pages/shared/types/backendErrors.interface';
import {CurrentUserInterface} from '../../../pages/shared/types/currentUser.interface';
import {RegisterRequestInterface} from '../types/registerRequest.interface';

import {ActionTypes} from '../store/types/actionTypes';

export const registerAction = createAction(
  ActionTypes.REGISTER,
  props<{request: RegisterRequestInterface}>()
);

export const registerSuccessAction = createAction(
  ActionTypes.REGISTER_SUCCESS,
  props<{currentUser: CurrentUserInterface}>()
);

export const registerFailureAction = createAction(
  ActionTypes.REGISTER_FAILURE,
  props<{errors: BackendErrorsInterface}>()
);
