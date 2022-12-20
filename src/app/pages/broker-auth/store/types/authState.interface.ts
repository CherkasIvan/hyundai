import {BackendErrorsInterface} from '../../../../pages/shared/types/backendErrors.interface';
import {CurrentBrokerInterface} from './currentBroker.interface';

export interface BrokerAuthStateInterface {
  isSubmitting: boolean;
  currentUser: CurrentBrokerInterface | null;
  isLoggedIn: boolean | null;
  validationErrors: BackendErrorsInterface | null;
}
