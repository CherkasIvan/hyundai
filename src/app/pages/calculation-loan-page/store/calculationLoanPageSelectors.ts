import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ClientCarInterface } from '../../../shared/models/interfaces/clientCar.interface';

import { CalculationLoanPageStateInterface } from '../models/interfaces/calculationLoanPageState.interface';

export const calculationLoanPageFeatureSelector =
  createFeatureSelector<ClientCarInterface>(
    'calculation-loan-page'
  );

export const currentCustomerSelector = createSelector(
  calculationLoanPageFeatureSelector,
  (calculationLoanPageState:ClientCarInterface) =>
    calculationLoanPageState.selectedClient
);
