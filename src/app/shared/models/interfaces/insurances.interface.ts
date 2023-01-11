import { CascoOption } from './casco';

export interface InsurancesInterface {
  label: string;
  checkbox: boolean;
  description: string;
  options: {
    default: [];
    available?: {
      option: CascoOption[]
    };
  };
  total_summ: string;
}
