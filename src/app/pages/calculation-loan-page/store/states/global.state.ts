import { CascoState, initialCascoState } from './cascoState';

export interface GlobalState {
  casco: CascoState,
}

export const initialGlobalState: GlobalState = {
  casco: initialCascoState,
};
