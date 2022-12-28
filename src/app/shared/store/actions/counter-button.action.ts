import { createAction } from '@ngrx/store';

import { CounterButtonTypes } from '../../enums/counterButtonTypes';

export const counterButtonAction = createAction(
  CounterButtonTypes.COUNTER_BUTTON
);

export const counterButtonIncreaseAction = createAction(
  CounterButtonTypes.COUNTER_BUTTON_INCREASE
);

export const counterButtonDecreaseAction = createAction(
  CounterButtonTypes.COUNTER_BUTTON_DECREASE
);
