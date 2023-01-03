import { BackendErrorsType } from '../../../../shared/models/types/backendErrors.type';
import { CurrentUserInterface } from './current-user.interface';

export interface UserAuthStateInterface {
  isSubmitting: boolean;
  currentUser: CurrentUserInterface | null;
  userIsLoggedIn: boolean;
  validationErrors: BackendErrorsType | null;
}
