import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'tes-drivers-content',
  templateUrl: './drivers-content.component.html',
  styleUrls: ['./drivers-content.component.scss'],
})
export class DriversContentComponent implements OnInit {
  public formDriversData!: FormGroup;
  public driversTitle: string = 'Водители';

  constructor(private fb: FormBuilder) {
    this.formDriversData = this.fb.group({
      invalid_drivers: [true, Validators.required],
      all_drivers_in_contracts: [true, Validators.required],
      drivers: this.fb.array([
        this.fb.group({
          osago: [true, Validators.required],
          kasko: [true, Validators.required],
          credit: [false, Validators.required],
          driver_title: ['Водитель 1', Validators.required],
          driver_surname: ['Смирнов', Validators.required],
          driver_name: ['Андрей', Validators.required],
          driver_middle_name: ['Вадимович', Validators.required],
          driver_phone_number: ['+7 966 000 09 09', Validators.required],
          driver_birth_date: ['27.11.1989', Validators.required],
          driver_license_number: ['1234 12345678', Validators.required],
          driver_license_issued_by: ['ГИБДД 6421', Validators.required],
          driver_license_issued_date: ['21.06.2019', Validators.required],
          driver_exp_start: ['21.06.2017', Validators.required],
          driver_exp_same_as_license_issued: [false, Validators.required],
        }),
      ]),
    });
  }

  get drivers(): FormArray {
    return this.formDriversData.get('drivers') as FormArray;
  }

  ngOnInit(): void {
    this.initializeForm();
  }

  private initializeForm(): void {}

  public onSubmitForm(): void {
    const body = this.formDriversData.value;
    console.log(body);
  }
}
