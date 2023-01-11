import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { CascoObject } from '../../../../shared/models/interfaces/casco';

export interface CascoState extends EntityState<CascoObject> {
  error: boolean;
  loading: boolean;
}

export const cascoAdapter: EntityAdapter<CascoObject> = createEntityAdapter<CascoObject>({
  selectId: (casco: CascoObject) => {
    console.log(casco);
    return casco.calculation_id;
  }
});

export const initialCascoState: CascoState = cascoAdapter.getInitialState({
  error: false,
  loading: true,
});
