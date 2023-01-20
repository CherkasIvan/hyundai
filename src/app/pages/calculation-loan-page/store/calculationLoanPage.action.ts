import { createAction, props } from '@ngrx/store';
import { ConnectCarToClientInterface } from '../../../shared/models/interfaces/connect-car-to-client.interface';
import { EditCarBodyInterface } from '../../../shared/models/interfaces/edit-car-body.interface';
import { SuccessCarCreationInterface } from '../../../shared/models/interfaces/success-car-creation.interface';
import { SuccessCarUpdatedInterface } from '../../../shared/models/interfaces/success-car-updated.interface';
import { SuccessCarConnectedInterface } from '../../../shared/models/interfaces/success-connection-car.interface';

import { CalculationLoanPageEnum } from '../models/enums/calculationLoanPage.enum';

import { GetCascoPoliciesBody, GetCascoResponse } from '../../../shared/models/interfaces/casco';
import { SelectedClientInterface } from '../models/interfaces/selectedClient.interface';

export const getSelectedClientAction = createAction(
  CalculationLoanPageEnum.GET_SELECTED_CLIENT,
  props<{ clientId: any }>()
);

export const createCarAction = createAction(
  CalculationLoanPageEnum.CREATE_CAR,
);

export const createCarSuccessAction = createAction(
  CalculationLoanPageEnum.CREATE_CAR_SUCCESS,
  props<{ response: SuccessCarCreationInterface }>()
);

export const createCarFailureAction = createAction(
  CalculationLoanPageEnum.CREATE_CAR_FAILURE,
  props<{ error: unknown }>()
);

export const setCarIdAction = createAction(
  CalculationLoanPageEnum.SET_CAR_ID,
  props<{ carId: string }>()
);

export const editCarAction = createAction(
  CalculationLoanPageEnum.EDIT_CAR_OPTIONS,
  props<{ params: EditCarBodyInterface }>()
);

export const editCarSuccessAction = createAction(
  CalculationLoanPageEnum.EDIT_CAR_OPTIONS_SUCCESS,
  props<{ response: SuccessCarUpdatedInterface }>()
);

export const editCarFailureAction = createAction(
  CalculationLoanPageEnum.EDIT_CAR_OPTIONS_FAILURE,
  props<{ error: unknown }>()
);

export const connectCarToClientAction = createAction(
  CalculationLoanPageEnum.CONNECT_CAR_TO_CLIENT,
  props<{ params: ConnectCarToClientInterface }>()
);

export const connectCarToClientSuccessAction = createAction(
  CalculationLoanPageEnum.CONNECT_CAR_TO_CLIENT_SUCCESS,
  props<{ response: SuccessCarConnectedInterface}>()
);

export const connectCarToClientFailureAction = createAction(
  CalculationLoanPageEnum.CONNECT_CAR_TO_CLIENT_FAILURE,
  props<{ error: unknown }>()
);

export const setSelectedClientAction = createAction(
  CalculationLoanPageEnum.SET_SELECTED_CLIENT,
  props<{ selectedClient: SelectedClientInterface }>()
);

export const getCascoPolicies = createAction(
  CalculationLoanPageEnum.GET_CASCO_POLICIES,
  props<{ params: GetCascoPoliciesBody }>()
);

export const getCascoPoliciesSuccess = createAction(
  CalculationLoanPageEnum.GET_CASCO_POLICIES_SUCCESS,
  props<{ response: GetCascoResponse }>()
);

export const getCascoPoliciesFailure = createAction(
  CalculationLoanPageEnum.GET_CASCO_POLICIES_FAILURE,
  props<{ error: unknown }>()
);
