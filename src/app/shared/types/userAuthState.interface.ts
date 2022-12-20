import { BackendErrorsInterface } from './backendErrors.interface';
import { CurrentUserInterface } from './currentUser.interface';

export interface UserAuthStateInterface {
  isSubmitting: boolean;
  currentBroker: CurrentUserInterface | null;
  brokerIsLoggedIn: boolean;
  validationErrors: BackendErrorsInterface | null;
}
