import { createAction, props } from '@ngrx/store';

import { CalculationLoanPageEnum } from '../models/enums/calculationLoanPage.enum';

import { GetCascoPoliciesBody, GetCascoResponse } from '../../../shared/models/interfaces/casco';

export const setSelectedClientAction = createAction(
  CalculationLoanPageEnum.SET_SELECTED_CLIENT,
  props<{ selectedClient: any }>()
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
