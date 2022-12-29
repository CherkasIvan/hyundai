import { createAction } from '@ngrx/store';

import { CounterButtonEnums } from '../../models/enums/counterButton.enum';

export const counterButtonAction = createAction(
  CounterButtonEnums.COUNTER_BUTTON
);

export const counterButtonIncreaseAction = createAction(
  CounterButtonEnums.COUNTER_BUTTON_INCREASE
);

export const counterButtonDecreaseAction = createAction(
  CounterButtonEnums.COUNTER_BUTTON_DECREASE
);
