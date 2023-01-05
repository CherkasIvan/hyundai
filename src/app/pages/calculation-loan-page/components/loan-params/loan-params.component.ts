import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'tes-loan-params',
  templateUrl: './loan-params.component.html',
  styleUrls: ['./loan-params.component.scss'],
})
export class LoanParamsComponent implements OnInit {
  public formLoanParams!: FormGroup;

  constructor(private _fb: FormBuilder) {}

  public initializeForm(): void {
    this.formLoanParams = this._fb.group({
      isTelematicLoan: [true, Validators.required],
      initialPayment: [905000, Validators.required],

    })
  }
  public getInitialPayment(e: string | number) {
    this.formLoanParams.get('initialPayment')?.patchValue(e)
  }

  ngOnInit(): void {
    this.initializeForm();
  }
}
