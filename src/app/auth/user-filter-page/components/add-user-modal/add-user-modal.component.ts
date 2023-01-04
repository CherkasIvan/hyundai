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
  public addNewClientForm!: FormGroup;

  private initializeForm(): void {
    this.addUserForm = this._fb.group({
      client_fullname: ['', Validators.required],
      car_brand: ['', Validators.required],
      client_phone: ['', Validators.required],
      car_model: ['', Validators.required],
      client_email: ['', Validators.required],
      car_vin: ['', Validators.required],
    });
  }

  private initializeNewClientForm(): void {
    this.addNewClientForm = this._fb.group({
      code: ['', Validators.required],
      client_id: ['', Validators.required],
    });
  }

  constructor(private _fb: FormBuilder) {}

  public changeModel(e: Event) {
    this.getModel?.setValue((e.target as HTMLInputElement).value, {
      onlySelf: true,
    });
  }

  get getModel() {
    return this.addUserForm.get('car_model');
  }

  public changeCarBrand(e: Event) {
    this.getCar?.setValue((e.target as HTMLInputElement).value, {
      onlySelf: true,
    });
  }

  get getCar() {
    return this.addUserForm.get('car_brand');
  }

  public saveForm(formData: FormGroup) {
    console.log(formData.value);
  }

  ngOnInit(): void {
    this.initializeForm();
    this.initializeNewClientForm();
  }
}
