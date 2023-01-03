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
    this.addUserForm
      .get('educations')
      ?.patchValue(this.educations[this.selectedIndex]);
  }

  private initializeForm(): void {
    this.addUserForm = this._fb.group({
      client_fullname: ['', Validators.required],
      car_brand: ['', Validators.required],
      client_phone: ['', Validators.required],
      car_model: ['', Validators.required],
      client_email: ['', Validators.required],
      car_vin: ['', Validators.required],
      loan_program: ['', Validators.required],
      kasko: ['', Validators.required],
      educations: ['', Validators.required],
      insurens_agency: ['', Validators.required],
      bank: ['', Validators.required],
      code: ['', Validators.required],
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

  public changeCarBrand(e: Event) {
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

  public saveForm(formData: FormGroup) {
    console.log(formData.value);
  }

  ngOnInit(): void {
    this.initializeForm();
  }
}
