// AUTH USER //

import { createAction, props } from '@ngrx/store';

import { BackendErrorsType } from '../../../../shared/models/types/backendErrors.type';

import { CurrentUserInterface } from '../../models/interfaces/current-user.interface';

import { UserActionEnum } from '../../models/enums/userAction.enum';
import { UserRegisterRequestType } from '../../models/types/user-register-request.type';

export const userAuthAction = createAction(
  UserActionEnum.USER_AUTH,
  props<{ request: UserRegisterRequestType }>()
);

export const userAuthSuccessAction = createAction(
  UserActionEnum.USER_AUTH_SUCCESS,
  props<{ currentUser: CurrentUserInterface }>()
);

export const userAuthFailureAction = createAction(
  UserActionEnum.USER_AUTH_FAILURE,
  props<{ errors: BackendErrorsType }>()
);
