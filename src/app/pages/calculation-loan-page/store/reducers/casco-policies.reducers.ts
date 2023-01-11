import { createReducer, on } from '@ngrx/store';
import { cascoAdapter, initialCascoState } from '../states/cascoState';
import { getCascoPolicies, getCascoPoliciesFailure, getCascoPoliciesSuccess } from '../calculationLoanPage.action';

export const cascoPoliciesReducer = createReducer(
  initialCascoState,
  on(getCascoPolicies, (state) => ({ ...state, loading: true })),
  on(getCascoPoliciesSuccess, (state, { response }) =>
    // todo: the response shouldn't be wrapped in array,
    //  take it out when we will start to get an array from the server
    cascoAdapter.setAll([response], {
      ...state,
      error: false,
      loading: false,
    }),
  ),
  on(getCascoPoliciesFailure, (state) =>
    cascoAdapter.removeAll({
      ...state,
      error: true,
      loading: false,
      total: 0,
    }),
  ),
);
