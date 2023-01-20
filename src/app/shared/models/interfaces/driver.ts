export interface Driver {
  // optional parameters used for form in drivers-content.component.ts
  driver_id?: string,
  client_id?: string,
  osago?: boolean,
  kasko?: boolean,
  credit?: boolean,
  driver_title?: string,
  first_name: string,
  last_name: string,
  patronymic: string,
  phone: string,
  birthdate: string,
  license_number: string,
  license_issued_by: string,
  license_issued_at: string,
  driver_experience_start_date: string,
  driver_exp_same_as_license_issued?: boolean,
}
