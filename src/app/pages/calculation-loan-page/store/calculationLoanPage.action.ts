import { createAction, props } from '@ngrx/store';

import { CalculationLoanPageEnum } from '../models/enums/calculationLoanPage.enum';

import { ClientCarInterface } from '../../../shared/models/interfaces/clientCar.interface';

export const formCarOptionsChangeAction = createAction(
  CalculationLoanPageEnum.CHANGE_CAR_OPTIONS_FORM_VALUE,
  props<{ formValue: any }>()
);

// export const setCarOptionsAction = createAction(
//   CalculationLoanPageEnum.SET_CAR_OPTIONS,
//   props<{ carOptions: ClientCarInterface[] }>()
// );
