import { createAction } from '@ngrx/store';

import { CounterButtonEnums } from '../../enums/counterButtonEnums';

export const counterButtonIncreaseAction = createAction(
  CounterButtonEnums.COUNTER_BUTTON_INCREASE
);

export const counterButtonDecreaseAction = createAction(
  CounterButtonEnums.COUNTER_BUTTON_DECREASE
);
