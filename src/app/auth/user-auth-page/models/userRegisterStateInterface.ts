import { BackendErrorsType } from '../../../shared/models/types/backendErrors.type';

import { CurrentUserInterface } from './interfaces/current-user.interface';

export interface UserRegisterStateInterface {
  isSubmitting: boolean;
  currentUser: CurrentUserInterface | null;
  userIsRegister: boolean;
  validationErrors: BackendErrorsType | null;
}
