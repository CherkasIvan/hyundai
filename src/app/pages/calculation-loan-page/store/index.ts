import { cascoPoliciesReducer } from './reducers/casco-policies.reducers';
import { ActionReducerMap } from '@ngrx/store';
import { GlobalState } from './states/global.state';

export const _reducers: ActionReducerMap<GlobalState> = {
  casco: cascoPoliciesReducer,
};
