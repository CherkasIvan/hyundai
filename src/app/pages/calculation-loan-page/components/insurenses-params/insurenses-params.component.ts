import { AfterContentChecked, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-insurenses-params',
  templateUrl: './insurenses-params.component.html',
  styleUrls: ['./insurenses-params.component.scss']
})
export class InsurensesParamsComponent implements OnInit, AfterContentChecked {

  public formInsuranceOptions!: FormGroup;
  public insuranceInitialTerm!: boolean;
  public kaskoInsurancePolicyTerm!: string[];
  public selectedIndex!: number;
  public insuranceTerms!: string[];

  constructor(private _fb: FormBuilder) { 
  }

  public initializeForm(): void {
    this.formInsuranceOptions = this._fb.group({
      initialPolicyTerm: [true, Validators.required],
      policyStartDate: ['18.10.2022', Validators.required],
      policyEndDate: ['17.10.2023', Validators.required],
      osagoInsurancePolicyTerm: ['12 месяцев', Validators.required],
      osagoPolicyStartDate: ['18.10.2022', Validators.required],
      osagoPolicyEndDate: ['17.10.2023', Validators.required],
      kaskoPolicyStartDate: ['18.10.2022', Validators.required],
      kaskoPolicyEndDate: ['17.10.2023', Validators.required],
      kaskoInsurancePolicyTerm: ['1 год', Validators.required],
    
    });
  }

  ngOnInit(): void {
    this.initializeForm();
  }

  onSubmitForm(model: FormGroup): void{
    const body = this.formInsuranceOptions.value;
    body.kaskoInsurancePolicyTerm = this.insuranceTerms[this.selectedInsuranceTermIndex];
    console.log(body);
  }
  public selectedInsuranceTermIndex: number = 0;
  public activateInsuranceTermClass(index: number) {
    this.selectedInsuranceTermIndex = index;
  }

  public changeStatus(e: Event) {
    this.insurancePolicyTerm?.setValue((e.target as HTMLInputElement).value, {
      onlySelf: true,
    });
  }

  get insurancePolicyTerm() {
    return this.formInsuranceOptions.get('insurancePolicyTerm');
  }

  ngAfterContentChecked(): void {
    this.insuranceInitialTerm = this.formInsuranceOptions?.get('initialPolicyTerm')?.value; 
    this.insuranceTerms = ['1 год', '2 года', '3 года', '4 года', '5 лет'];

    if(!this.formInsuranceOptions.value.initialPolicyTerm) {
      this.formInsuranceOptions?.patchValue({
        osagoInsurancePolicyTerm: null, 
        osagoPolicyStartDate: null, 
        osagoPolicyEndDate: null,
        kaskoInsurancePolicyTerm: null, 
        kaskoPolicyStartDate: null, 
        kaskoPolicyEndDate: null,
      });
    }
  }

}
