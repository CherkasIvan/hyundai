import { createAction, props } from '@ngrx/store';
import { ClientFilterActionEnum } from '../../models/enums/client-filter-action.enum';

export const clientModalAction = createAction(
  ClientFilterActionEnum.ADD_CLIENT_MODAL
);

export const clientModalOpenAction = createAction(
  ClientFilterActionEnum.ADD_CLIENT_MODAL_OPEN
);

export const clientModalCloseAction = createAction(
  ClientFilterActionEnum.ADD_CLIENT_MODAL_CLOSE
);

export const clientModalResultAction = createAction(
  ClientFilterActionEnum.ADD_CLIENT_MODAL_RESULT,
  props<{ form: any }>
);

export const getCarsOwnersListAction = createAction(
  ClientFilterActionEnum.GET_CARS_OWNERS_LIST
)

export const setCarsOwnersListAction = createAction(
  ClientFilterActionEnum.SET_CARS_OWNERS_LIST,
  props<{clients: any}>()
)
export const setSelectedClientIdAction = createAction(
  ClientFilterActionEnum.SET_SELECTED_CLIENT_ID,
  props<{selectedClientId: string}>()
)
