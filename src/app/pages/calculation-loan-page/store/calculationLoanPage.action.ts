import { createAction, props } from '@ngrx/store';

import { CalculationLoanPageEnum } from '../models/enums/calculationLoanPage.enum';

import { ClientCarInterface } from '../../../shared/models/interfaces/clientCar.interface';

export const getCarOptionsAction = createAction(
  CalculationLoanPageEnum.GET_CAR_OPTIONS,
  props<{ clientId: string }>()
);

export const setCarOptionsAction = createAction(
  CalculationLoanPageEnum.SET_CAR_OPTIONS,
  props<{ carOptions: ClientCarInterface[] }>()
);
