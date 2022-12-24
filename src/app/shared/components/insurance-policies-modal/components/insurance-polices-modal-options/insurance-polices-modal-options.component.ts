import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-insurance-polices-modal-options',
  templateUrl: './insurance-polices-modal-options.component.html',
  styleUrls: ['./insurance-polices-modal-options.component.scss'],
})
export class InsurancePolicesModalOptionsComponent implements OnInit {
  @Input() public specialOptions!: any;
  public optionsModalForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  public initializeForm(): void {
    this.optionsModalForm = this.fb.group({
      option_1: ['', Validators.required],
      option_2: ['', Validators.required],
      option_3: ['', Validators.required],
      option_4: ['', Validators.required],
    });
  }

  public submitForm(optionsModalForm: any): void {
    console.log(optionsModalForm.value);
  }

  public changeOption2(e: any) {
    this.option2Status?.setValue(e.target.value, {
      onlySelf: true,
    });
  }

  public changeOption4(e: any) {
    this.option4Status?.setValue(e.target.value, {
      onlySelf: true,
    });
  }

  get option2Status() {
    return this.optionsModalForm.get('option_2');
  }

  get option4Status() {
    return this.optionsModalForm.get('option_4');
  }

  ngOnInit(): void {
    this.initializeForm();
  }
}
