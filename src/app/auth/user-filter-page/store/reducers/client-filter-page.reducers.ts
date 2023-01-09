import { Action, createReducer, on } from '@ngrx/store';

import { ClientFilterPageInterface } from '../../models/interfaces/client-filter-page.interface';
import {
  clientModalCloseAction,
  clientModalOpenAction,
} from '../actions/client-filter-page.actions';

const initialState: ClientFilterPageInterface = {
  isModalOpen: false,
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
  )
);

export function reducers(state: ClientFilterPageInterface, action: Action) {
  return modalReducer(state, action);
}
