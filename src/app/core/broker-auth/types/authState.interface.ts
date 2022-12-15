import {BackendErrorsInterface} from '../../../pages/shared/types/backendErrors.interface';
import {CurrentBrokerInterface} from '../store/types/currentBroker.interface';

export interface AuthStateInterface {
  isSubmitting: boolean;
  currentBroker: CurrentBrokerInterface | null;
  isLoggedIn: boolean | null;
  validationErrors: BackendErrorsInterface | null;
}
