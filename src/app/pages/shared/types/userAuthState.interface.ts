import {BackendErrorsInterface} from './backendErrors.interface';
import {CurrentUserInterface} from './currentUser.interface';

export interface userAuthStateInterface {
  isSubmitting: boolean;
  currentBroker: CurrentUserInterface | null;
  brokerIsLoggedIn: boolean;
  validationErrors: BackendErrorsInterface | null;
}
