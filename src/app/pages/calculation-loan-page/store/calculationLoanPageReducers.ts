import { Action, createReducer, on } from '@ngrx/store';

import { formCarOptionsChangeAction } from './calculationLoanPage.action';

import { CalculationLoanPageStateInterface } from '../models/interfaces/calculationLoanPageState.interface';
import { ClientCarInterface } from 'src/app/shared/models/interfaces/clientCar.interface';

const initialState: ClientCarInterface = {
  client_id: '',
  car_id: '',
  vin: 'CC123456778A99',
  car_mark: 'Hyundai',
  car_model: 'Solaris',
  car_year: '2020',
  engine_capacity: '',
  transmission: 'Автоматическая',
  car_price: '1200000',
  pts_issue_year: '2020',
  car_body_type: 'Седан',
  car_telematic: '',
  car_telematic_type: '',
  time_from: '',
  time_to: '',
};

const calculationLoanPageReducer = createReducer(
  initialState,
  on(
    formCarOptionsChangeAction,
    (state, action): ClientCarInterface => ({ ...state, ...action.formValue })
  )
  // on(
  //   setCarOptionsAction,
  //   (state, action): CalculationLoanPageStateInterface => ({
  //     ...state,
  //     carOptions: action.carOptions,
  //   })
  // )
);

export const getForm = (state: ClientCarInterface) => {
  console.log(state);
  return state;
};

export function reducers(state: ClientCarInterface, action: Action) {
  return calculationLoanPageReducer(state, action);
}
