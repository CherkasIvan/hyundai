import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-user-modal',
  templateUrl: './add-user-modal.component.html',
  styleUrls: ['./add-user-modal.component.scss'],
})
export class AddUserModalComponent implements OnInit {
  public modalTitle: string = 'Добавить клиента';
  public addUserForm!: FormGroup;
  public educations: string[] = [
    '1 год',
    '2 года',
    '3 года',
    '5 лет',
    '10 лет',
    '15 лет',
  ];
  public selectedIndex: number = 0;
  public activateClass(index: number): void {
    this.selectedIndex = index;
  }

  private initializeForm(): void {
    this.addUserForm = this._fb.group({
      invalid_drivers: ['', Validators.required],
      all_drivers_in_contracts: ['', Validators.required],
      drivers: this._fb.array([
        this._fb.group({
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
          driver_exp_same_as_license_issued: ['', Validators.required],
        }),
      ]),
    });
  }

  constructor(private _fb: FormBuilder) {}

  public changeModel(e: Event) {
    this.getModel?.setValue((e.target as HTMLInputElement).value, {
      onlySelf: true,
    });
  }

  get getModel() {
    return this.addUserForm.get('insurancePolicyTerm');
  }

  public changeCarMark(e: Event) {
    this.getCar?.setValue((e.target as HTMLInputElement).value, {
      onlySelf: true,
    });
  }

  get getCar() {
    return this.addUserForm.get('insurancePolicyTerm');
  }

  public changeInsurer(e: Event) {
    this.getCar?.setValue((e.target as HTMLInputElement).value, {
      onlySelf: true,
    });
  }

  get getInsurer() {
    return this.addUserForm.get('insurancePolicyTerm');
  }

  public changeBank(e: Event) {
    this.getCar?.setValue((e.target as HTMLInputElement).value, {
      onlySelf: true,
    });
  }

  get getBank() {
    return this.addUserForm.get('insurancePolicyTerm');
  }

  ngAfterContentChecked(): void {}

  ngOnInit(): void {
    this.initializeForm();
  }
}
