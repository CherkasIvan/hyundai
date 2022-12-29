import { createAction, props } from '@ngrx/store';

import { ClientCarInterface } from '../../../shared/models/interfaces/clientCar.interface';

import { CalculationLoanPageEnum } from '../models/enums/calculationLoanPage.enum';

export const getCarOptionsAction = createAction(
  CalculationLoanPageEnum.GET_CAR_OPTIONS,
  props<{ clientId: string }>()
);

export const setCarOptionsAction = createAction(
  CalculationLoanPageEnum.SET_CAR_OPTIONS,
  props<{ carOptions: ClientCarInterface[] }>()
);
