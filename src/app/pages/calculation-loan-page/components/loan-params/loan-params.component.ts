import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatTabChangeEvent } from '@angular/material/tabs';

@Component({
  selector: 'tes-loan-params',
  templateUrl: './loan-params.component.html',
  styleUrls: ['./loan-params.component.scss'],
})
export class LoanParamsComponent implements OnInit {
  public formLoanParams!: FormGroup;
  public selectedIndex: number = 0;
  public loanTerms: string[] = [
    '1 год',
    '2 года',
    '3 года',
    '4 года',
    '5 лет',
    '10 лет',
    '15 лет',
    '20 лет'
  ];
  public indexOfTab: number = 0;

  constructor(private _fb: FormBuilder) {}

  public initializeForm(): void {
    this.formLoanParams = this._fb.group({
      telematic_loan: [true, Validators.required],
      initial_payment: [905000, Validators.required],
      initial_payment_proportion: ["35%", Validators.required],
      remaining_payment: [1199350, Validators.required],
      loan_amount: [2905000, Validators.required],
      subsidies: [false, Validators.required],
      loan_term: [false, Validators.required],
    })
  }
  public getInitialPayment(e: string | number) {
    this.formLoanParams.get('initial_payment')?.patchValue(e)
  }

  public getInitialPaymentProportion(e: string | number) {
    this.formLoanParams.get('initial_payment_proportion')?.patchValue(e)
  }

  public getRemainingPayment(e: string | number) {
    this.formLoanParams.get('remaining_payment')?.patchValue(e)
  }

  public activateClass(index: number) {
    this.selectedIndex = index;
    this.formLoanParams
      .get('loan_term')
      ?.patchValue(this.loanTerms[this.selectedIndex]);
  }
  public onTabChange(event: MatTabChangeEvent) {
    this.indexOfTab = event.index;
  }

  public nextStep(index: number) {
    if (this.indexOfTab != 2) {
      this.indexOfTab = index;
    }
  }

  ngOnInit(): void {
    this.initializeForm();
  }
}
