// import {BackendErrorsInterface} from 'pages/shared/types/backendErrors.interface';
import { BackendErrorsType } from '../../../../shared/models/types/backendErrors.type';

import { CurrentBrokerInterface } from './currentBroker.interface';

export interface BrokerAuthStateInterface {
  isBrokerSubmitting: boolean;
  currentBroker: CurrentBrokerInterface | null;
  brokerIsLoggedIn: boolean;
  validationErrors: BackendErrorsType | null;
}
