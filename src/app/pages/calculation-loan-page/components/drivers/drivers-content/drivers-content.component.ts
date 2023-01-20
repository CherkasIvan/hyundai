import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ClientAuthService } from 'src/app/auth/user-filter-page/services/client-auth.service';
import { Driver } from '../../../../../shared/models/interfaces/driver';

@Component({
  selector: 'tes-drivers-content',
  templateUrl: './drivers-content.component.html',
  styleUrls: ['./drivers-content.component.scss'],
})
export class DriversContentComponent implements OnInit, OnChanges {
  @Input() public drivers!: Driver[];

  @Output() private submit: EventEmitter<any> = new EventEmitter<any>();
  @Output() private updateDrivers: EventEmitter<any> = new EventEmitter<any>();

  public formDriversData!: FormGroup;

  private newDrivers: Driver[] = [];

  constructor(
    private fb: FormBuilder,
    private _authClientService: ClientAuthService,
  ) {
    this.formDriversData = this.fb.group({
      invalid_drivers: [true, Validators.required],
      all_drivers_in_contracts: [true, Validators.required],
      drivers: this.fb.array([]),
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['drivers'].currentValue)
      if (changes['drivers'].currentValue !== changes['drivers'].previousValue)
        this.initializeForm();
  }

  ngOnInit(): void {
  }

  private initializeForm(): void {
    if (this.drivers.length > 0) {
      this.drivers.map(driver => {
        delete driver.client_id;

        driver.osago = false;
        driver.kasko = false;
        driver.credit = false;
        driver.driver_exp_same_as_license_issued = true;
      });
    }

    this.addDriver(this.drivers);
    // this.formDriversData.controls['drivers'].patchValue({ this.drivers })
  }

  getDrivers(): FormArray {
    return this.formDriversData.get('drivers') as FormArray;
  }

  public addDriver(drivers: Driver[]): void {
    const driversFG = this.getDrivers();

    if (drivers.length > 0) {
      drivers.map((driver, i) => {
        const driverFG = this.fb.group({
          driver_id: [driver.driver_id ?? null],
          osago: [driver.osago ?? false, Validators.required],
          kasko: [driver.kasko ?? false, Validators.required],
          credit: [driver.credit ?? false, Validators.required],
          driver_title: ['Водитель ' + (i + 1), Validators.required],
          first_name: [driver.first_name ?? null, Validators.required],
          last_name: [driver.last_name ?? null, Validators.required],
          patronymic: [driver.patronymic ?? null, Validators.required],
          phone: [driver.phone ?? null, Validators.required],
          birthdate: [driver.birthdate ?? null, Validators.required],
          license_number: [driver.license_number ?? null, Validators.required],
          license_issued_by: [driver.license_issued_by ?? null, Validators.required],
          license_issued_at: [driver.license_issued_at ?? null, Validators.required],
          driver_experience_start_date: [driver.driver_experience_start_date ?? null, Validators.required],
          driver_exp_same_as_license_issued: [driver.driver_exp_same_as_license_issued ?? false, Validators.required],
        });
        driversFG.push(driverFG);
      });
    } else {
      const driverFG = this.fb.group({
        driver_id: [null],
        osago: [false, Validators.required],
        kasko: [false, Validators.required],
        credit: [false, Validators.required],
        driver_title: ['Водитель ' + (this.formDriversData.controls['drivers'].value.length + 1), Validators.required],
        first_name: [null, Validators.required],
        last_name: [null, Validators.required],
        patronymic: [null, Validators.required],
        phone: [null, Validators.required],
        birthdate: [null, Validators.required],
        license_number: [null, Validators.required],
        license_issued_by: [null, Validators.required],
        license_issued_at: [null, Validators.required],
        driver_experience_start_date: [null, Validators.required],
        driver_exp_same_as_license_issued: [false, Validators.required],
      });
      driversFG.push(driverFG);
    }

    this.formDriversData.controls['drivers'].patchValue(driversFG.controls.map(control => control));
  }

  public onSubmit(): void {
    const formDataDrivers = this.formDriversData.value.drivers;

    formDataDrivers.forEach((driver: Driver) => {
      if (!driver.driver_id) this.newDrivers.push(driver);
    });

    if (this.newDrivers.length > 0) {
      this.newDrivers.forEach(driver => {
        delete driver.driver_id;
        delete driver.driver_title;
        delete driver.osago;
        delete driver.kasko;
        delete driver.credit;
        delete driver.driver_exp_same_as_license_issued;
      });

      this.submit.emit(this.newDrivers);
      this.newDrivers.length = 0;
    }
  }

  public onUpdateDrivers(): void {
  }
}
