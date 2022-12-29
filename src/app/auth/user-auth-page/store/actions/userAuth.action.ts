// AUTH USER //

import { createAction, props } from '@ngrx/store';

import { BackendErrorsType } from '../../../../shared/models/types/backendErrors.type';

import { CurrentUserInterface } from '../../models/currentUser.interface';

import { UserActionEnum } from '../../models/enums/userAction.enum';

import { UserRegisterRequestInterface } from '../../models/userRegisterRequest.interface';

export const userAuthAction = createAction(
  UserActionEnum.USER_AUTH,
  props<{ request: UserRegisterRequestInterface }>()
);

export const userAuthSuccessAction = createAction(
  UserActionEnum.USER_AUTH_SUCCESS,
  props<{ currentUser: CurrentUserInterface }>()
);

export const userAuthFailureAction = createAction(
  UserActionEnum.USER_AUTH_FAILURE,
  props<{ errors: BackendErrorsType }>()
);
