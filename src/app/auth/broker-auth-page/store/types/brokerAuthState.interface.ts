// import {BackendErrorsInterface} from 'pages/shared/types/backendErrors.interface';
import { BackendErrorsInterface } from '../../../../shared/types/backendErrors.interface';
import { CurrentBrokerInterface } from './currentBroker.interface';

export interface BrokerAuthStateInterface {
  isBrokerSubmitting: boolean;
  currentBroker: CurrentBrokerInterface | null;
  brokerIsLoggedIn: boolean;
  validationErrors: BackendErrorsInterface | null;
}
