import { Action, createReducer, on } from '@ngrx/store';

import { setSelectedClientAction } from './calculationLoanPage.action';

import { ClientCarInterface } from 'src/app/shared/models/interfaces/clientCar.interface';

const initialState: ClientCarInterface = {
  selectedClient: {}
};

const calculationLoanPageReducer = createReducer(
  initialState,
  on(
    setSelectedClientAction,
    (state, action): ClientCarInterface => ({
      ...state,
      selectedClient: action
    })
  ),
);

export const getForm = (state: ClientCarInterface) => {
  console.log(state);
  return state;
};

export function reducers(state: ClientCarInterface, action: Action) {
  return calculationLoanPageReducer(state, action);
}
