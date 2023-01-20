import { createFeatureSelector, createSelector } from '@ngrx/store';
import { SelectedClientInterface } from '../../../shared/models/interfaces/clientCar.interface';

export const calculationLoanPageFeatureSelector =
  createFeatureSelector<SelectedClientInterface>(
    'calculation-loan-page'
  );

export const currentCustomerSelector = createSelector(
  calculationLoanPageFeatureSelector,
  (calculationLoanPageState:SelectedClientInterface) =>
    calculationLoanPageState.selectedClient
);

export const carIdSelector = createSelector(
  calculationLoanPageFeatureSelector,
  (calculationLoanPageState:SelectedClientInterface) =>
    calculationLoanPageState.carId
);
