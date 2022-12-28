import { createAction } from '@ngrx/store';

import { InputClearerEnums } from '../../enums/inputClearerEnums';

export const inputClearerAddTextAction = createAction(
  InputClearerEnums.INPUT_CLEARER_ADD
);

export const inputClearerDeleteTextAction = createAction(
  InputClearerEnums.INPUT_CLEARER_DELETE
);

export const inputClearerClearTextAction = createAction(
  InputClearerEnums.INPUT_CLEARER_CLEAR
);
