import { SpecialOptionsInterface } from './special-options.interface';

export interface InsuranceOptionsInterface {
  key: string;
  label: string;
  placeholder: string;
  type: string;
  options?: SpecialOptionsInterface[];
}
