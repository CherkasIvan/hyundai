import { BackendErrorsType } from '../types/backendErrors.type';
import { CurrentUserInterface } from './currentUser.interface';

export interface UserAuthStateInterface {
  isSubmitting: boolean;
  currentBroker: CurrentUserInterface | null;
  brokerIsLoggedIn: boolean;
  validationErrors: BackendErrorsType | null;
}
