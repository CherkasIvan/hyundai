import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { GetUsersService } from '../../services/get-users.service';

@Component({
  selector: 'tes-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent implements OnInit, OnDestroy {
  public filterForm!: FormGroup;
  public carMarkFilterParams: string[] = [];

  constructor(
    private _fb: FormBuilder,
    private _getUsersService: GetUsersService
  ) {}

  private initializeForm(): void {
    this.filterForm = this._fb.group({
      all_clients: ['', Validators.required],
      car_brand: ['', Validators.required],
      car_model: ['', Validators.required],
      have_loan: ['', Validators.required],
      have_casko: ['', Validators.required],
      have_osago: ['', Validators.required],
    });
  }

  public changeCarBrand(e: Event) {
    this.getCar?.setValue((e.target as HTMLInputElement).value, {
      onlySelf: true,
    });

    this._getUsersService.filterCarsMark(this.getCar?.value);
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
    this._getUsersService.clientCarMark$.subscribe((value) => {
      const arr = Array.from(value);
      arr.forEach((el: any) => {
        this.carMarkFilterParams.push(el.first_name);
        this.carMarkFilterParams = Array.from(
          new Set(this.carMarkFilterParams)
        );
      });
    });
  }

  ngOnDestroy(): void {}
}
