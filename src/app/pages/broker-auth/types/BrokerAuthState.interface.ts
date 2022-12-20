import { BackendErrorsInterface } from '../../../shared/types/backendErrors.interface';
import { CurrentBrokerInterface } from '../store/types/currentBroker.interface';

export interface BrokerAuthStateInterface {
  isSubmitting: boolean;
  currentBroker: CurrentBrokerInterface | null;
  brokerIsLoggedIn: boolean;
  validationErrors: BackendErrorsInterface | null;
}
