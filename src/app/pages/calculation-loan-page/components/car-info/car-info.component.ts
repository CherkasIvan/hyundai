import {
  OnInit,
  Component,
  Input,
  OnDestroy,
  AfterContentChecked,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { MatTooltip } from '@angular/material/tooltip';
import { ActivatedRoute } from '@angular/router';
import { select, Store } from '@ngrx/store';

import { Observable, Subscription } from 'rxjs';
import { ClientAuthService } from 'src/app/auth/user-filter-page/services/client-auth.service';
import { log } from 'util';
import {
  getCarsOwnersListSelector,
  getSelectedClientIdSelector,
} from '../../../../auth/user-filter-page/store/selectors/client-filter-page.selectors';
import { setSelectedClientAction } from '../../store/calculationLoanPage.action';
import { currentCustomerSelector } from '../../store/calculationLoanPageSelectors';

@Component({
  selector: 'tes-car-info',
  templateUrl: './car-info.component.html',
  styleUrls: ['./car-info.component.scss'],
})
export class CarInfoComponent
  implements OnInit, OnDestroy, AfterContentChecked
{
  @Input()
  public typesOfCarBody: string[] = [
    'Седан',
    'Внедорожник',
    'Универсал',
    'Кроссовер',
    'Хэтчбек',
    'Минивэн',
  ];

  public selectedIndex: number = 0;
  public activateClass(index: number) {
    this.selectedIndex = index;
    this.formCarOptions
      ?.get('car_body_type')
      ?.patchValue(this.typesOfCarBody[this.selectedIndex]);
  }
  public sliderValue!: number;
  public formCarOptions!: FormGroup;

  public showTicks: boolean = false;
  public step: number = 1;
  public thumbLabel: boolean = false;
  public value: number = 0;
  public car_telematic!: boolean;
  private car_telematic_sub: Subscription | undefined;
  public clientValue: any;
  public selectedClientId$!: Observable<string>;
  public clientId!: string;
  public carsOwnersList$!: Observable<any>;
  public selectedClient!: any;
  public customer$!: any;
  public currentCustomer!:any;

  
  constructor(private _fb: FormBuilder,
              private _authClientService: ClientAuthService,
              private readonly _store: Store) {
    this.selectedClientId$ = this._store.pipe(select(getSelectedClientIdSelector));
    this.carsOwnersList$ = this._store.pipe(select(getCarsOwnersListSelector));
  }

  public initializeForm(): void {
    this.formCarOptions = this._fb.group({
      VIN: ['CC123456778A99', Validators.required],
      car_mark: ['Hyundai', Validators.required],
      car_model: ['Solaris', Validators.required],
      car_year: ['2020', Validators.required],
      pts_issue_year: ['2020', Validators.required],
      horse_power: ['125', Validators.required],
      transmission: ['Автоматическая', Validators.required],
      car_body_type: ['Седан', Validators.required],
      car_price: ['1200000', Validators.required],
      car_telematic: [true, Validators.required],
      telematic_misos_light: [true, Validators.required],
      telematic_bluelink: [false, Validators.required],
      telematic_misos_pro: [false, Validators.required],
    });
  }

  ngOnInit(): void {
    this.initializeForm();
    this.car_telematic_sub = this.formCarOptions
      .get('car_telematic')
      ?.valueChanges.subscribe((value) => (this.car_telematic = value));
    this.car_telematic = this.formCarOptions?.value.car_telematic;

    this.selectedClientId$.subscribe((el) => this.clientId = el);
    this.carsOwnersList$.subscribe((el) => {
      this.selectedClient = el?.clients?.filter((client: any) => client.client_id == this.clientId)[0];
      this._store.dispatch(setSelectedClientAction(this.selectedClient));
      this.customer$ = this._store.pipe(select(currentCustomerSelector));
      this.customer$.subscribe((el: any) => {
     this.currentCustomer = el})
    })
    console.log(this.currentCustomer);
    this.formCarOptions.get('VIN')?.patchValue(this.currentCustomer?.vin);
    this.formCarOptions.get('car_mark')?.patchValue(this.currentCustomer?.car_mark);
    this.formCarOptions.get('car_model')?.patchValue(this.currentCustomer?.car_model);
    this.formCarOptions.get('car_year')?.patchValue(this.currentCustomer?.car_year);
    this.formCarOptions.get('pts_issue_year')?.patchValue(this.currentCustomer?.car_year);
    this.formCarOptions.get('horse_power')?.patchValue(this.currentCustomer?.horse_power);
    this.formCarOptions.get('transmission')?.patchValue(this.currentCustomer?.transmission);
    this.formCarOptions.get('car_body_type')?.patchValue(this.currentCustomer?.car_body_type);
    this.formCarOptions.get('car_price')?.patchValue(this.currentCustomer?.car_price);
    this.formCarOptions.get('car_telematic')?.patchValue(this.currentCustomer?.car_telematic);
  }
  public openTooltip(tooltip: MatTooltip): void {
    tooltip.show();
    setTimeout(() => {
      tooltip.hide();
    }, 1500);
  }

  public getCarPrice(e: string | number) {
    this.formCarOptions?.get('car_price')?.patchValue(e);
  }

  ngAfterContentChecked(): void {
    if (!this.formCarOptions.value.car_telematic) {
      this.formCarOptions?.patchValue({
        telematic_misos_light: false,
        telematic_bluelink: false,
        telematic_misos_pro: false,
      });
    }
  }

  ngOnDestroy(): void {
    this.car_telematic_sub?.unsubscribe();
  }
}
