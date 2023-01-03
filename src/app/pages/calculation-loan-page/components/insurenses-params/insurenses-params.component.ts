import { AfterContentChecked, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-insurenses-params',
  templateUrl: './insurenses-params.component.html',
  styleUrls: ['./insurenses-params.component.scss'],
})
export class InsurensesParamsComponent implements OnInit, AfterContentChecked {
  public formInsuranceOptions!: FormGroup;
  public insuranceInitialTerm!: boolean;
  public kaskoInsurancePolicyTerm!: string[];
  public selectedIndex!: number;
  public insuranceTerms!: string[];

  constructor(private _fb: FormBuilder) {}

  public initializeForm(): void {
    this.formInsuranceOptions = this._fb.group({
      initialPolicyTerm: [true],
      policyStartDate: [''],
      policyEndDate: [''],
      osagoInsurancePolicyTerm: [''],
      osagoPolicyStartDate: [''],
      osagoPolicyEndDate: [''],
      kaskoPolicyStartDate: [''],
      kaskoPolicyEndDate: [''],
      kaskoInsurancePolicyTerm: [''],
    });
  }

  public selectedInsuranceTermIndex: number = 0;
  public activateInsuranceTermClass(index: number) {
    this.selectedInsuranceTermIndex = index;
    this.formInsuranceOptions
      .get('kaskoInsurancePolicyTerm')
      ?.patchValue(this.insuranceTerms[this.selectedInsuranceTermIndex]);
  }

  public changeStatus(e: Event) {
    this.insurancePolicyTerm?.setValue((e.target as HTMLInputElement).value, {
      onlySelf: true,
    });
  }

  get insurancePolicyTerm() {
    return this.formInsuranceOptions.get('insurancePolicyTerm');
  }

  public ngOnInit(): void {
    this.initializeForm();
  }

  public ngAfterContentChecked(): void {
    this.insuranceInitialTerm =
      this.formInsuranceOptions?.get('initialPolicyTerm')?.value;
    this.insuranceTerms = ['1 год', '2 года', '3 года', '4 года', '5 лет'];

    if (this.formInsuranceOptions.value.initialPolicyTerm) {
      this.formInsuranceOptions?.patchValue({
        osagoInsurancePolicyTerm: null,
        osagoPolicyStartDate: null,
        osagoPolicyEndDate: null,
        kaskoInsurancePolicyTerm: null,
        kaskoPolicyStartDate: null,
        kaskoPolicyEndDate: null,
      });
    } else {
      this.formInsuranceOptions?.patchValue({
        policyStartDate: null,
        policyEndDate: null,
      });
    }
  }
}
