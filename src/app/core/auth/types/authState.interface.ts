import {BackendErrorsInterface} from '../../../pages/shared/types/backendErrors.interface';
import {CurrentUserInterface} from '../../../pages/shared/types/currentUser.interface';

export interface AuthStateInterface {
  isSubmitting: boolean;
  currentUser: CurrentUserInterface | null;
  isLoggedIn: any; //переделать!!!! boolean | null (feature for auth guard)
  validationErrors: BackendErrorsInterface | null;
}
