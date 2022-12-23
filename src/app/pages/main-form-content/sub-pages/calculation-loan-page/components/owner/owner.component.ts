import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-owner',
  templateUrl: './owner.component.html',
  styleUrls: ['./owner.component.scss']
})
export class OwnerComponent implements OnInit {
  formCarOptions!: FormGroup

  constructor( private fb: FormBuilder) { }

  ngOnInit(): void {
    this.initializeForm(); 
  }

  public initializeForm(): void {
    this.formCarOptions = this.fb.group({
      osago: ['true', Validators.required],
      kasko: ['true', Validators.required],
      credit: ['true', Validators.required],
      policy_holder: ['true', Validators.required],
      driver: ['true', Validators.required],
      driver_full_name: ['Сирнов Андрей Вадимович', Validators.required],
      gender: ['Мужской', Validators.required],
      birthdate: ['2000-07-12', Validators.required],
      birthplace: ['Москва', Validators.required],
      passport_number: ['65 11 111111', Validators.required],
      passport_issued_at: ['2066-07-12', Validators.required],
      passport_division_code: ['661-001', Validators.required],
      residence_address: ['г. Екатеринбург, ул. Зуброва, д. 75, кв. 58', Validators.required],
      marital_status: [1, Validators.required],
      kids_amount: [2, Validators.required],
      email: ['123452@gmail.com', Validators.required],
      personal_data_policy_confirmation: ['true', Validators.required],
    });
}

public onSubmitForm(model: FormGroup): void {
  console.log(model);
}
}
