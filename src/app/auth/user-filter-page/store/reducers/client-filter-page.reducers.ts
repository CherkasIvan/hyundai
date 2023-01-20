import { Action, createReducer, on } from '@ngrx/store';

import { ClientFilterPageInterface } from '../../models/interfaces/client-filter-page.interface';
import {
  clientModalCloseAction,
  clientModalOpenAction,
  getCarsOwnersListAction,
  setCarsOwnersListAction, setSelectedClientIdAction,
} from '../actions/client-filter-page.actions';

const initialState: ClientFilterPageInterface = {
  isModalOpen: false,
  clients: [],
  selectedClientId: '',
};

const modalReducer = createReducer(
  initialState,
  on(
    clientModalOpenAction,
    (state): ClientFilterPageInterface => ({
      ...state,
      isModalOpen: true,
    })
  ),
  on(
    clientModalCloseAction,
    (state): ClientFilterPageInterface => ({
      ...state,
      isModalOpen: false,
    })
  ),
  on(
    getCarsOwnersListAction,
    (state): ClientFilterPageInterface => ({
      ...state
    })
  ),
  on(
    setCarsOwnersListAction,
    (state, payload): ClientFilterPageInterface => ({
      ...state,
      clients: payload,
    })
  ),
  on(
    setSelectedClientIdAction,
    (state, action): ClientFilterPageInterface => ({
      ...state,
      selectedClientId: action.selectedClientId,
    })
  ),
);

export function reducers(state: ClientFilterPageInterface, action: Action) {
  return modalReducer(state, action);
}
