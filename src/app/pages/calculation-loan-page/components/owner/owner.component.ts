import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { PersistenceService } from '../../../../shared/services/persistence.service';
import { getSelectedClientAction } from '../../store/calculationLoanPage.action';
import { currentCustomerSelector } from '../../store/calculationLoanPageSelectors';

@Component({
  selector: 'tes-owner',
  templateUrl: './owner.component.html',
  styleUrls: ['./owner.component.scss'],
})
export class OwnerComponent implements OnInit {
  public name!: string;
  public formOwnerOptions!: FormGroup;
  public selectedIndex!: number;

  public genders: string[] = ['Женский', 'Мужской'];

  public maritalStatuses: string[] = ['Женат/Замужем', 'Холост', 'В разводе'];
  public selectedGenderIndex: number = 0;

  public customer$!: any;
  public currentCustomer!:any;
  public clientId!: any;
  public cardTitle = "Кредитные и страховые продукты";
  public gender!: any;


  public activateGenderClass(index: number) {
    this.selectedGenderIndex = index;
    this.formOwnerOptions
      ?.get('gender')
      ?.patchValue(this.genders[this.selectedGenderIndex]);
  }

  public selectedMaritalStatusIndex: number = 0;
  public activateMaritalStatusClass(index: number) {
    this.selectedMaritalStatusIndex = index;
    this.formOwnerOptions
      ?.get('marital_status')
      ?.patchValue(this.maritalStatuses[this.selectedMaritalStatusIndex]);
  }
  public activateClass(index: number) {
    this.selectedIndex = index;
  }

  constructor(private _fb: FormBuilder,
              private readonly _store: Store,
              private _activatedRoute: ActivatedRoute,
              private _persistenceService: PersistenceService) {
  }

  public initializeForm(): void {
    this.formOwnerOptions = this._fb.group({
      osago: [false],
      kasko: [false],
      credit: [false],
      policy_holder: [false],
      driver: [false],
      client_first_name: ['', Validators.required],
      client_last_name: ['', Validators.required],
      client_patronymic: ['', Validators.required],
      gender: ['', Validators.required],
      birthdate: ['', Validators.required],
      bornplace: ['Москва', Validators.required],
      passport_number: ['', Validators.required],
      passport_issued_at: ['', Validators.required],
      passport_division_code: ['', Validators.required],
      residence_address: ['', Validators.required,],
      marital_status: [1, Validators.required],
      kids_amount: [, Validators.required],
      email: ['', Validators.required],
      personal_data_policy_confirmation: [false, Validators.required],
    });
  }

  public getKidsCount(e: number) {
    this.formOwnerOptions?.get('kids_amount')?.patchValue(e);
  }

  ngOnInit(): void {
    this.initializeForm();

    this._persistenceService.set('policyHolderStatus', "false");
    this._persistenceService.set('driverStatus', "false");

    this._activatedRoute.queryParams.subscribe((el) => {
      this.clientId = el;
    })

    this._store.dispatch(getSelectedClientAction(this.clientId))

   this.customer$ = this._store.pipe(select(currentCustomerSelector));
    this.customer$.subscribe((el: any) => {
      this.currentCustomer = el;
      this.name = el.first_name;
      this.gender = el.gender
      if(this.gender){
        this.activateGenderClass(this.gender);
      }
      if(el.first_name) {
        this.formOwnerOptions.get('client_first_name')?.patchValue(this.currentCustomer.first_name);
        this.formOwnerOptions.get('client_last_name')?.patchValue(this.currentCustomer.last_name);
        this.formOwnerOptions.get('client_patronymic')?.patchValue(this.currentCustomer.patronymic);
        this.formOwnerOptions.get('birthdate')?.patchValue(this.currentCustomer.birthdate);
        this.formOwnerOptions.get('passport_number')?.patchValue(this.currentCustomer.passport_number);
        this.formOwnerOptions.get('passport_issued_at')?.patchValue(this.currentCustomer.passport_issued_at);
        this.formOwnerOptions.get('passport_division_code')?.patchValue(this.currentCustomer.passport_division_code);
        this.formOwnerOptions.get('residence_address')?.patchValue(this.currentCustomer.residence_address);
        this.formOwnerOptions.get('email')?.patchValue(this.currentCustomer.email);
      }
    })
  }

  public setPolicyHolder(e: Event) {
  let policyHolderStatus = this.getStatusPolicyHolder?.value
  if (!policyHolderStatus) {
    this._persistenceService.set('policyHolderStatus', "true");
  } else {
    this._persistenceService.set('policyHolderStatus', "false");
  }}

  public setDriverStatus(e: Event) {
    let driverStatus = this.getDriverStatus?.value
    if (!driverStatus) {
      this._persistenceService.set('driverStatus', "true");
    } else {
      this._persistenceService.set('driverStatus', "false");
    }}

  get getStatusPolicyHolder() {
    return this.formOwnerOptions.get('policy_holder');
  }

  get getDriverStatus() {
    return this.formOwnerOptions.get('driver');
  }

  public submitForm (event: boolean) {
    console.log(this.formOwnerOptions.value);
  }
}
