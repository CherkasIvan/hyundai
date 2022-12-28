import { createFeatureSelector, createSelector } from "@ngrx/store";
import { CalculationLoanPageStateInterface } from "../types/calculationLoanPageState.interface";

export const calculationLoanPageFeatureSelector =
  createFeatureSelector<CalculationLoanPageStateInterface>('calculation-loan-page');

export const isSubmittingSelector = createSelector(
    calculationLoanPageFeatureSelector,
  (calculationLoanPageState: CalculationLoanPageStateInterface) => calculationLoanPageState.carOptions
);