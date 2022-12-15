import {BackendErrorsInterface} from './../../shared/types/backendErrors.interface';
import {CurrentUserInterface} from '../../../pages/auth/types/currentUser.interface';

export interface AuthStateInterface {
  isSubmitting: boolean;
  currentUser: CurrentUserInterface | null;
  userIsLoggedIn: boolean | null;
  validationErrors: BackendErrorsInterface | null;
}
