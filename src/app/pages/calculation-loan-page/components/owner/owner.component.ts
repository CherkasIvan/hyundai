import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-owner',
  templateUrl: './owner.component.html',
  styleUrls: ['./owner.component.scss'],
})
export class OwnerComponent implements OnInit {
  public fullName!: string;
  public formOwnerOptions!: FormGroup;
  public selectedIndex!: number;

  public genders: string[] = ['Женский', 'Мужской'];

  public maritalStatuses: string[] = ['Женат/Замужем', 'Холост', 'В разводе'];
  public selectedGenderIndex: number = 0;
  public activateGenderClass(index: number) {
    this.selectedGenderIndex = index;
  }

  public selectedMaritalStatusIndex: number = 0;
  public activateMaritalStatusClass(index: number) {
    this.selectedMaritalStatusIndex = index;
  }
  public activateClass(index: number) {
    this.selectedIndex = index;
  }

  constructor(private _fb: FormBuilder) {}

  ngOnInit(): void {
    this.initializeForm();
  }

  public initializeForm(): void {
    this.formOwnerOptions = this._fb.group({
      osago: [true, Validators.required],
      kasko: [true, Validators.required],
      credit: [true, Validators.required],
      policy_holder: [true, Validators.required],
      driver: [true, Validators.required],
      client_full_name: ['Иванов Иван Иванович', Validators.required],

      gender: ['Мужской', Validators.required],
      birthdate: ['2000-07-12', Validators.required],
      bornplace: ['Москва', Validators.required],
      passport_number: ['65 11 111111', Validators.required],
      passport_issued_at: ['2066-07-12', Validators.required],
      passport_division_code: ['661-001', Validators.required],
      residence_address: [
        'г. Екатеринбург, ул. Зуброва, д. 75, кв. 58',
        Validators.required,
      ],
      marital_status: [1, Validators.required],
      kids_amount: [2, Validators.required],
      email: ['123452@gmail.com', Validators.required],
      personal_data_policy_confirmation: [true, Validators.required],
    });
  }
  public getFullName(e: string) {
    this.fullName = e;
    this.formOwnerOptions?.get('client_full_name')?.patchValue(e);
  }

  public getKidsCount(e: number) {
    this.formOwnerOptions?.get('kids_amount')?.patchValue(e);
  }

  public onSubmitForm(form: FormGroup): void {
    const body = form.value;
    body.gender = this.genders[this.selectedGenderIndex];
    body.marital_status = this.maritalStatuses[this.selectedMaritalStatusIndex];

    console.log(body);
  }
}
