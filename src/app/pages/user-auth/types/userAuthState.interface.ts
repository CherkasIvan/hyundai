import {BackendErrorsInterface} from '../../shared/types/backendErrors.interface';
import {CurrentUserInterface} from './currentUser.interface';

export interface UserAuthStateInterface {
  isSubmitting: boolean;
  currentUser: CurrentUserInterface | null;
  userIsLoggedIn: boolean;
  validationErrors: BackendErrorsInterface | null;
}
