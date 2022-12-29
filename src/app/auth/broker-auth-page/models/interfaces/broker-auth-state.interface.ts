// import {BackendErrorsInterface} from 'pages/shared/types/backendErrors.interface';

import { BackendErrorsType } from 'src/app/shared/models/types/backendErrors.type';
import { CurrentBrokerInterface } from './current-broker.interface';

export interface BrokerAuthStateInterface {
  isBrokerSubmitting: boolean;
  currentBroker: CurrentBrokerInterface | null;
  brokerIsLoggedIn: boolean;
  validationErrors: BackendErrorsType | null;
}
