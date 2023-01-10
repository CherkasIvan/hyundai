import { BackendErrorsType } from '../../../../shared/models/types/backendErrors.type';

import { CurrentClientInterface } from './current-client..interface';

export interface ClientAuthStateInterface {
  isSubmitting: boolean;
  currentUser: CurrentClientInterface | null;
  userIsLoggedIn: boolean;
  validationErrors: BackendErrorsType | null;
}
