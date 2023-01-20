import {
  OnInit,
  Component,
  Input,
  OnDestroy
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { MatTooltip } from '@angular/material/tooltip';
import { ActivatedRoute } from '@angular/router';
import { select, Store } from '@ngrx/store';

import { Subscription } from 'rxjs';
import { ConnectCarToClientInterface } from '../../../../shared/models/interfaces/connect-car-to-client.interface';
import { EditCarBodyInterface } from '../../../../shared/models/interfaces/edit-car-body.interface';

import {
  connectCarToClientAction,
  createCarAction,
  editCarAction,
  getSelectedClientAction,
} from '../../store/calculationLoanPage.action';
import { carIdSelector, currentCustomerSelector } from '../../store/calculationLoanPageSelectors';

@Component({
  selector: 'tes-car-info',
  templateUrl: './car-info.component.html',
  styleUrls: ['./car-info.component.scss'],
})
export class CarInfoComponent
  implements OnInit, OnDestroy
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
  public formCarOptions!: FormGroup;
  public step: number = 1;
  public value: number = 0;
  public car_telematic!: boolean;
  private car_telematic_sub: Subscription | undefined;
  public clientId!: string;
  public customer$!: any;
  public currentCustomer!:any;
  public currentCarPrice!: string | number;
  public carId$!: any;
  public carIdValue!: string;
  public telematicTypesList: string[] = ["Misos LIGHT", "Bluelink", "Misos PRO"];
  public carBodyType!: any;
  public cardTitle = "Информация об автомобиле";

  
  constructor(private _fb: FormBuilder,
              private readonly _store: Store,
              private _activatedRoute: ActivatedRoute) {
  }

  public initializeForm(): void {
    this.formCarOptions = this._fb.group({
      vin: ['CC123456778A99', Validators.required],
      car_mark: ['', Validators.required],
      car_model: ['', Validators.required],
      car_year: ['', Validators.required],
      pts: ['', Validators.required],
      horse_power: ['125', Validators.required],
      transmission: ['Автоматическая', Validators.required],
      car_body_type: ['Седан', Validators.required],
      car_price: ['1200000', Validators.required],
      car_telematic: [true, Validators.required],
      car_telematic_type: [[''],],
    });
  }

  ngOnInit(): void {
    this.initializeForm();
    this.car_telematic_sub = this.formCarOptions
      .get('car_telematic')
      ?.valueChanges.subscribe((value) => (this.car_telematic = value));
    this.car_telematic = this.formCarOptions?.value.car_telematic;
    this.car_telematic_sub?.add(
      this._activatedRoute.queryParams.subscribe((el) => {
        this.clientId = el['clientId'];
      }))

    this._store.dispatch(getSelectedClientAction({clientId: this.clientId}));

    this.customer$ = this._store.pipe(select(currentCustomerSelector));
    this.customer$.subscribe((el: any) => {
      this.currentCustomer = el;
      this.currentCarPrice = el.car_price;
      this.carIdValue = el.car_id;
      this.carBodyType = el.car_body_type;
      if(this.carBodyType){
        let initialSelectedIndex = this.typesOfCarBody.indexOf(this.carBodyType);
        this.activateClass(initialSelectedIndex);
      }
      if(this.currentCustomer) {
        this.formCarOptions.get('VIN')?.patchValue(this.currentCustomer?.vin);
        this.formCarOptions.get('car_mark')?.patchValue(this.currentCustomer?.car_mark);
        this.formCarOptions.get('car_model')?.patchValue(this.currentCustomer?.car_model);
        this.formCarOptions.get('car_year')?.patchValue(this.currentCustomer?.car_year);
        this.formCarOptions.get('pts')?.patchValue(this.currentCustomer?.pts);
        this.formCarOptions.get('horse_power')?.patchValue(this.currentCustomer?.horse_power);
        this.formCarOptions.get('transmission')?.patchValue(this.currentCustomer?.transmission);
        this.formCarOptions.get('car_body_type')?.patchValue(this.currentCustomer?.car_body_type);
        this.formCarOptions.get('car_price')?.patchValue(this.currentCustomer?.car_price);
        this.formCarOptions.get('car_telematic')?.patchValue(this.currentCustomer?.car_telematic);
        this.formCarOptions.get('car_telematic_type')?.patchValue(JSON.parse(this.currentCustomer?.car_telematic_type));
      }
    })

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

  public submitForm(event: boolean) {
    if (!this.carIdValue) {
      this._store.dispatch(createCarAction());
      this.carId$ = this._store.pipe(select(carIdSelector)).subscribe((el) => {
        this.carIdValue = el;
        if(this.carIdValue) {
          const editCarRequest: EditCarBodyInterface = { ...{ carId: this.carIdValue }, ...{ ...this.formCarOptions.value } };
          const connectCarToClientRequest: ConnectCarToClientInterface = { ...{ clientId: this.clientId }, ...{ carId: this.carIdValue } };
          this._store.dispatch(editCarAction({ params: editCarRequest }));
          this._store.dispatch(connectCarToClientAction({ params: connectCarToClientRequest }));
        }
      })
    } else {
      const editCarRequest: EditCarBodyInterface = { ...{ carId: this.carIdValue }, ...{ ...this.formCarOptions.value }};
      this._store.dispatch(editCarAction({ params: editCarRequest }));
    }
  }
  ngOnDestroy(): void {
    this.car_telematic_sub?.unsubscribe();
    this.carBodyType = 'Седан'
  }
}
