import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalSpecialOptionsInterface } from 'src/app/shared/models/interfaces/modal-special-options.interface';
import { CascoOption } from '../../../../../../../shared/models/interfaces/casco';

@Component({
  selector: 'tes-insurance-policy-options',
  templateUrl: './insurance-policy-options.component.html',
  styleUrls: ['./insurance-policy-options.component.scss'],
})
export class InsurancePolicyOptionsComponent implements OnInit {
  @Input() public policyOptions!: ModalSpecialOptionsInterface[] | any;

  @Output() private optionsForRecalculation: EventEmitter<any> = new EventEmitter<any>();

  public optionsModalForm!: FormGroup;
  public defaultOptions: any[] = [];
  public availableOptions: any[] = [];

  constructor(private _fb: FormBuilder) {}

  public initializeForm(): void {
    this.defaultOptions = [...this.policyOptions.default];
    this.availableOptions = [...this.policyOptions.available.option];

    const formControls: any = {}

    this.defaultOptions.forEach((option: CascoOption) => {
      formControls[option.option_id] = [
        true,
        Validators.required,
      ];
    });

    this.availableOptions.forEach((option: CascoOption, i) => {
      // condition here just for the demo
      if (i < 3) {
        formControls[option.option_id] = [
          false,
          Validators.required,
        ];
      }
      return;
    });

    this.optionsModalForm = this._fb.group(formControls);
  }

  public onRecalculate(): void {
    console.log(this.optionsModalForm.value);
    this.optionsForRecalculation.emit(this.optionsModalForm.value)
  }

  ngOnInit(): void {
    console.log(this.policyOptions);
    this.initializeForm();
  }
}
