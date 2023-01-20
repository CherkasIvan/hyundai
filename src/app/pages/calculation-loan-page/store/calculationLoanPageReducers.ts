import { Action, createReducer, on } from '@ngrx/store';

import {
  connectCarToClientAction,
  createCarAction,
  editCarAction,
  getSelectedClientAction,
  setCarIdAction,
  setSelectedClientAction,
} from './calculationLoanPage.action';

import { SelectedClientInterface } from 'src/app/shared/models/interfaces/clientCar.interface';

const initialState: SelectedClientInterface = {
  selectedClient: {},
  carId: '',
};

const calculationLoanPageReducer = createReducer(
  initialState,
  on(
    getSelectedClientAction,
    (state): SelectedClientInterface => ({
      ...state
    })
  ),
  on(
    setSelectedClientAction,
    (state, action): SelectedClientInterface => ({
      ...state,
      selectedClient: action
    })
  ),
  on(
    createCarAction,
    (state): SelectedClientInterface => ({
      ...state
    })
  ),
  on(
    setCarIdAction,
    (state, action): SelectedClientInterface => ({
      ...state,
      carId: action.carId
    })
  ),
  on(
    editCarAction,
    (state): SelectedClientInterface => ({
      ...state
    })
  ),
  on(
    connectCarToClientAction,
    (state): SelectedClientInterface => ({
      ...state
    })
  ),

);

export function reducers(state: SelectedClientInterface, action: Action) {
  return calculationLoanPageReducer(state, action);
}
