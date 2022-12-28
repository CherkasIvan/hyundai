import { BackendErrorsInterface } from '../../../shared/types/backendErrors.interface';
import { CurrentUserInterface } from './currentUser.interface';

export interface UserRegisterStateInterface {
  isSubmitting: boolean;
  currentUser: CurrentUserInterface | null;
  userIsRegister: boolean;
  validationErrors: BackendErrorsInterface | null;
}
