import { createAction, props } from '@ngrx/store';

import { BackendErrorsType } from '../../../../shared/models/types/backendErrors.type';

import { UserActionEnum } from '../../models/enums/userAction.enum';

import { CurrentUserInterface } from '../../models/currentUser.interface';
import { UserRegisterRequestInterface } from '../../models/userRegisterRequest.interface';

// REGISTER NEW USER //

export const userRegisterAction = createAction(
  UserActionEnum.USER_REGISTER,
  props<{ request: UserRegisterRequestInterface }>()
);

export const userRegisterSuccessAction = createAction(
  UserActionEnum.USER_REGISTER_SUCCESS,
  props<{ currentUser: CurrentUserInterface }>()
);

export const userRegisterFailureAction = createAction(
  UserActionEnum.USER_REGISTER_FAILURE,
  props<{ errors: BackendErrorsType }>()
);
