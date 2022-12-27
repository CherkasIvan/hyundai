import { OnInit, Component, Input, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { MatTooltip } from '@angular/material/tooltip';

import { Subscription } from 'rxjs';

@Component({
  selector: 'app-car-info',
  templateUrl: './car-info.component.html',
  styleUrls: ['./car-info.component.scss'],
})
export class CarInfoComponent implements OnInit, OnDestroy {
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
  public step: number = 1;
  public thumbLabel = false;
  public value: number = 0;
  public car_telematic!: boolean;
  private car_telematic_sub: Subscription | undefined;
  constructor(private fb: FormBuilder) {}

  public onSubmitForm(model: FormGroup): void {
    const body = this.formCarOptions.value;
    body.typesOfCarBody = this.typesOfCarBody[this.selectedIndex];
    console.log(body);
  }

  public initializeForm(): void {
    this.formCarOptions = this.fb.group({
      VIN: ['CC123456778A99', Validators.required],
      car_mark: ['Hyundai', Validators.required],
      car_model: ['Solaris', Validators.required],
      car_year: ['2020', Validators.required],
      pts_issue_year: ['2020', Validators.required],
      engine_capacity: ['2.0', Validators.required],
      transmission: ['Автоматическая', Validators.required],
      car_body_type: ['Седан', Validators.required],
      car_price: ['1200000', Validators.required],
      car_telematic: ['false', Validators.required],
      telematic_misos_light: ['true', Validators.required],
      telematic_bluelink: ['false', Validators.required],
      telematic_misos_pro: ['false', Validators.required],
    });
  }

  ngOnInit(): void {
    this.initializeForm();
    this.car_telematic_sub = this.formCarOptions
      .get('car_telematic')
      ?.valueChanges.subscribe((value) => (this.car_telematic = value));
  }

  public openTooltip(tooltip: MatTooltip): void {
    tooltip.show();
    setTimeout(() => {
      tooltip.hide();
    }, 1500);
  }

  ngOnDestroy(): void {
    this.car_telematic_sub?.unsubscribe();
  }
}
