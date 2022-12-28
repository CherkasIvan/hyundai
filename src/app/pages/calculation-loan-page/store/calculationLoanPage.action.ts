import { createAction, props } from "@ngrx/store";
import { ClientCarInterface } from "src/app/shared/types/clientCar.interface";
import { CalculationLoanPageTypes } from "../types/calculationLoanPageTypes";

export const getCarOptionsAction = createAction(
    CalculationLoanPageTypes.GET_CAR_OPTIONS,
    props<{ clientId: string }>()
  );

  export const setCarOptionsAction = createAction(
    CalculationLoanPageTypes.SET_CAR_OPTIONS,
    props<{ carOptions: ClientCarInterface[]}>()
  );