import { createAction, props } from '@ngrx/store';

import { BrokerActionEnum } from '../models/enums/broker-action.enum';

import { BackendErrorsType } from '../../../shared/models/types/backendErrors.type';
import { CurrentBrokerInterface } from '../models/interfaces/current-broker.interface';
import { BrokerRegisterRequestInterface } from '../models/interfaces/broker-register-request.interface';

export const authBrokerAction = createAction(
  BrokerActionEnum.BROKER_AUTH,
  props<{ request: BrokerRegisterRequestInterface }>()
);

export const authBrokerSuccessAction = createAction(
  BrokerActionEnum.BROKER_AUTH_SUCCESS,
  props<{ currentBroker: CurrentBrokerInterface }>()
);

export const authBrokerFailureAction = createAction(
  BrokerActionEnum.BROKER_AUTH_FAILURE,
  props<{ errors: BackendErrorsType }>()
);
