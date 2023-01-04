import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ModalService } from 'src/app/shared/services/modal.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent implements OnInit {
  public filterForm!: FormGroup;

  constructor(private _fb: FormBuilder) {}

  private initializeForm(): void {
    this.filterForm = this._fb.group({
      all_clients: ['', Validators.required],
      car_brand: ['', Validators.required],
      car_model: ['', Validators.required],
      insurance: ['', Validators.required],
      have_loan: ['', Validators.required],
    });
  }

  public changeCarBrand(e: Event) {
    this.getCar?.setValue((e.target as HTMLInputElement).value, {
      onlySelf: true,
    });
  }

  get getCar() {
    return this.filterForm.get('car_brand');
  }

  public changeModel(e: Event) {
    this.getModel?.setValue((e.target as HTMLInputElement).value, {
      onlySelf: true,
    });
  }

  get getModel() {
    return this.filterForm.get('car_model');
  }

  public changeInsurer(e: Event) {
    this.getCar?.setValue((e.target as HTMLInputElement).value, {
      onlySelf: true,
    });
  }

  get getInsurer() {
    return this.filterForm.get('insurance');
  }

  public applyFilters(filterValue: FormGroup) {
    console.log(filterValue.value);
  }

  public clearFields() {
    this.filterForm.reset();
  }

  ngOnInit(): void {
    this.initializeForm();
  }
}
