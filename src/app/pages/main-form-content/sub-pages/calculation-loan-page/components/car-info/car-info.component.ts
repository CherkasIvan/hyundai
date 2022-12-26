import { OnInit, Component, ViewEncapsulation, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatTooltip } from '@angular/material/tooltip';

@Component({
  selector: 'app-car-info',
  templateUrl: './car-info.component.html',
  styleUrls: ['./car-info.component.scss'],
})
export class CarInfoComponent implements OnInit {
  @Input()
  public carOptions!: object[];

  formCarOptions!: FormGroup;
  showTicks = false;
  step = 1;
  thumbLabel = false;
  value = 0;
  constructor(private fb: FormBuilder) {}

  public onSubmitForm(model: FormGroup): void {
    console.log(model);
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
      car_telematic: ['true', Validators.required],
    });
  }

  ngOnInit(): void {
    this.initializeForm();
  }

  public openTooltip(tooltip: MatTooltip): void {
    tooltip.show();
    setTimeout(() => {
      tooltip.hide();
    }, 1500);
  }
}
