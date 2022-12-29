import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-drivers-content',
  templateUrl: './drivers-content.component.html',
  styleUrls: ['./drivers-content.component.scss']
})
export class DriversContentComponent implements OnInit {
  public formDriversData!: FormGroup;

  constructor(private fb: FormBuilder) {}

  get drivers(): FormArray {
    return this.formDriversData.get('drivers') as FormArray;
  }

  ngOnInit(): void {
    this.initializeForm();
  }

  private initializeForm(): void {
    this.formDriversData = this.fb.group({
      invalid_drivers: ['', Validators.required],
      all_drivers_in_contracts: ['', Validators.required],
      drivers: this.fb.array([
        this.fb.group({
          osago: ['', Validators.required],
          kasko: ['', Validators.required],
          credit: ['', Validators.required],
          driver_title: ['', Validators.required],
          driver_surname: ['', Validators.required],
          driver_name: ['', Validators.required],
          driver_middle_name: ['', Validators.required],
          driver_phone_number: ['', Validators.required],
          driver_birth_date: ['', Validators.required],
          driver_licence_number: ['', Validators.required],
          driver_licence_issued_by: ['', Validators.required],
          driver_licence_issued_date: ['', Validators.required],
          driver_exp_start: ['', Validators.required],
          driver_exp_same_as_license_issued: ['', Validators.required]
        })
      ]),
    });
  }

  public onSubmitForm(): void {
    const body = this.formDriversData.value;
    console.log(body);
  }
}
