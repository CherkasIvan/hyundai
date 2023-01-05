import { AfterViewChecked, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { map } from 'rxjs';
import { GetUsersService } from '../../services/get-users.service';

@Component({
  selector: 'tes-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent implements OnInit, AfterViewChecked {
  public filterForm!: FormGroup;
  public carMarkFilterParams: string[] = [];
  public carModelFilterParams: string[] = [];

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

    this._getUsersService.filterCarsModel(this.getModel?.value)
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
    this._getUsersService.hasLoanFilter(false);
  }

  public hasLoan(e: Event) {
    const hasLoanValue = this.filterForm.get('have_loan')?.value;
    this._getUsersService.hasLoanFilter(hasLoanValue);
  }

  ngOnInit(): void {
    this.initializeForm();
    this._getUsersService.clientCarMark$.subscribe((value) => {
      const arr = Array.from(value);
      arr.forEach((el: any) => {
        this.carMarkFilterParams.push(el.car_mark);
        this.carMarkFilterParams = Array.from(
          new Set(this.carMarkFilterParams)
        );
      });
    });

    this._getUsersService.clientCarModel$.subscribe((value) => {
      const arr = Array.from(value);
      arr.forEach((el: any) => {
        this.carModelFilterParams.push(el.car_model);
        this.carModelFilterParams = Array.from(
          new Set(this.carModelFilterParams)
        );
      });
    });
  }

  ngAfterViewChecked(): void {}
}
