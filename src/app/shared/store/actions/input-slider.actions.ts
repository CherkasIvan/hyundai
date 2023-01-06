import { createAction, props } from '@ngrx/store';

import { InputSliderEnums } from '../../models/enums/inputSlider.enum';

export const inputSliderAction = createAction(InputSliderEnums.INPUT_SLIDER);

export const inputSliderChangeValueAction = createAction(
  InputSliderEnums.INPUT_SLIDER_CHANGE_VALUE,
  props<{ value: number | string }>()
);
