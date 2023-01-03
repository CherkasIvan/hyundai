import { createAction, props } from '@ngrx/store';

import { UserActionEnum } from '../../models/enums/userAction.enum';

import { CurrentUserInterface } from '../../models/interfaces/current-user.interface';
import { BackendErrorsType } from '../../../../shared/models/types/backendErrors.type';
import { UserRegisterRequestType } from '../../models/types/user-register-request.type';

// REGISTER NEW USER //

export const userRegisterAction = createAction(
  UserActionEnum.USER_REGISTER,
  props<{ request: UserRegisterRequestType }>()
);

export const userRegisterSuccessAction = createAction(
  UserActionEnum.USER_REGISTER_SUCCESS,
  props<{ currentUser: CurrentUserInterface }>()
);

export const userRegisterFailureAction = createAction(
  UserActionEnum.USER_REGISTER_FAILURE,
  props<{ errors: BackendErrorsType }>()
);
