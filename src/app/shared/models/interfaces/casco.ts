export interface CascoObject {
  provider: string, // it's mock parameter that not yet exists on the server, here it just for tests
  product: 'КАСКО' | 'ОСАГО', // it's mock parameter that not yet exists on the server, here it just for tests
  calculation_id: string,
  description: string,
  total_summ: number,
  credit: boolean,
  options?: {
    default: [
      {
        option_id: number,
        option_name: string,
        option_group_id: number,
        option_group_required: number,
        option_group_ex: number,
        option_number: number,
        description?: string,
      }
    ],
    available?: {
      option: CascoOption[]
    }
  }
}

export interface CascoOption {
  option_id: number,
  option_name: string,
  risk_id?: number,
  option_group_id?: number,
  group_option_required?: boolean,
  group_option_ex?: boolean,
  option_number?: number,
  description?: string,
  possible_values?: {
    possible_value?: [
      {
        name: string | number,
        value: string | number,
      },
      {
        name: string | number,
        value: string | number,
      },
      {
        name: string | number,
        value: string | number,
      }
    ]
  }
}

export interface GetCascoPoliciesBody {
  policyStartDate: string | number,
  insuranse_term: number,
  multidrive: boolean,
  drivers: unknown[],
  owner_is_insurer: boolean,
  insurer: Record<string, unknown>,
}

export interface GetCascoResponse extends CascoObject {
  // policies: CascoObject; // it should be CascoObject[] in the future
}
