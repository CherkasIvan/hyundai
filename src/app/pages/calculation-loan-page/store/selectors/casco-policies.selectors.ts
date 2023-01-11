import { cascoAdapter, CascoState } from '../states/cascoState';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export const {
  selectAll: _selectAllCasco,
} = cascoAdapter.getSelectors();

export const selectCascoState = createFeatureSelector<CascoState>('casco');


export const selectCascoPolicies = createSelector(
  selectCascoState,
  _selectAllCasco
);

export const selectCascoError = createSelector(
  selectCascoState,
  (state: CascoState): boolean => state.error
);

export const selectCascoLoading = createSelector(
  selectCascoState,
  (state: CascoState): boolean => state.loading
);
