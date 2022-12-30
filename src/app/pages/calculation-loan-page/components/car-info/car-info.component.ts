import {
  OnInit,
  Component,
  Input,
  OnDestroy,
  AfterContentChecked,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { MatTooltip } from '@angular/material/tooltip';

import { Subscription } from 'rxjs';

import { GetClientsDataService } from '../../../../shared/services/get-client.service';

@Component({
  selector: 'app-car-info',
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
  }
  public sliderValue!: number;
  public formCarOptions!: FormGroup;

  public showTicks = false;
  public step = 1;
  public thumbLabel = false;
  public value = 0;
  public car_telematic!: boolean;
  private car_telematic_sub: Subscription | undefined;
  constructor(
    private _fb: FormBuilder,
    private getClents: GetClientsDataService
  ) {}

  public onSubmitForm(model: FormGroup): void {
    const body = this.formCarOptions.value;
    body.car_body_type = this.typesOfCarBody[this.selectedIndex];
    console.log(body);
    // this.getClents.getClientData().subscribe((el) => console.log(el));
  }

  public initializeForm(): void {
    this.formCarOptions = this._fb.group({
      VIN: ['CC123456778A99', Validators.required],
      car_mark: ['Hyundai', Validators.required],
      car_model: ['Solaris', Validators.required],
      car_year: ['2020', Validators.required],
      pts_issue_year: ['2020', Validators.required],
      engine_capacity: ['2.0', Validators.required],
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
