import {createAction, props} from '@ngrx/store';

import {BackendErrorsInterface} from '../../../pages/shared/types/backendErrors.interface';
import {CurrentBrokerInterface} from './types/currentBroker.interface';
import {RegisterRequestInterface} from '../types/registerRequest.interface';

import {BrokerActionTypes} from './types/brokerActionTypes';

export const authBrokerAction = createAction(
  BrokerActionTypes.BROKER_AUTH,
  props<{request: RegisterRequestInterface}>()
);

export const authBrokerSuccessAction = createAction(
  BrokerActionTypes.BROKER_AUTH_SUCCESS,
  props<{currentBroker: CurrentBrokerInterface}>()
);

export const authBrokerFailureAction = createAction(
  BrokerActionTypes.BROKER_AUTH_FAILURE,
  props<{errors: BackendErrorsInterface}>()
);
