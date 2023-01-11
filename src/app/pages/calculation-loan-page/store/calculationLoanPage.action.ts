import { createAction, props } from '@ngrx/store';

import { CalculationLoanPageEnum } from '../models/enums/calculationLoanPage.enum';

import { ClientCarInterface } from '../../../shared/models/interfaces/clientCar.interface';
import { GetCascoPoliciesBody, GetCascoResponse } from '../../../shared/models/interfaces/casco';

export const formCarOptionsChangeAction = createAction(
  CalculationLoanPageEnum.CHANGE_CAR_OPTIONS_FORM_VALUE,
  props<{ formValue: any }>()
);

// export const setCarOptionsAction = createAction(
//   CalculationLoanPageEnum.SET_CAR_OPTIONS,
//   props<{ carOptions: ClientCarInterface[] }>()
// );

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
