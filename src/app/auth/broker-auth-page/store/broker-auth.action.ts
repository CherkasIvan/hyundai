import { createAction, props } from '@ngrx/store';

import { BrokerActionTypes } from './types/brokerActionTypes';

import { BackendErrorsInterface } from '../../../shared/types/backendErrors.interface';
import { CurrentBrokerInterface } from './types/currentBroker.interface';
import { BrokerRegisterRequestInterface } from './types/brokerRegisterRequest.interface';

export const authBrokerAction = createAction(
  BrokerActionTypes.BROKER_AUTH,
  props<{ request: BrokerRegisterRequestInterface }>()
);

export const authBrokerSuccessAction = createAction(
  BrokerActionTypes.BROKER_AUTH_SUCCESS,
  props<{ currentBroker: CurrentBrokerInterface }>()
);

export const authBrokerFailureAction = createAction(
  BrokerActionTypes.BROKER_AUTH_FAILURE,
  props<{ errors: BackendErrorsInterface }>()
);
