import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ModalService } from '../../../../shared/services/modal.service';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss'],
})
export class UserInfoComponent implements OnInit {
  public userInfoForm!: FormGroup;
  public kidsCouter: number = 0;

  public educations: string[] = [
    'Высшее',
    '2 и более высших',
    'Учёная степень',
    'Средне-специальное',
    'Среднее',
    'Начальное или неполное среднее',
  ];
  public selectedIndex: number = 0;

  public activateClass(index: number): void {
    this.selectedIndex = index;
    this.userInfoForm
      .get('educations')
      ?.patchValue(this.educations[this.selectedIndex]);
  }

  public addChildren(newCounterValue: number): void {
    this.userInfoForm.get('children_counter')?.patchValue(newCounterValue);
  }

  public obligatoryPayments(newCounterValue: string | number): void {
    this.userInfoForm.get('obligatory_payments')?.patchValue(newCounterValue);
  }

  public loanRepayment(newCounterValue: string | number): void {
    this.userInfoForm.get('loan_repayment')?.patchValue(newCounterValue);
  }

  public initializeForm(): void {
    this.userInfoForm = this.fb.group({
      passport_seria: ['', Validators.required],
      born_place: ['', Validators.required],
      passport_office: ['', Validators.required],
      educations: ['', Validators.required],
      date: ['', Validators.required],
      passport_chenged: ['', Validators.required],
      propertyStatus: ['', Validators.required],
      familyStatus: ['', Validators.required],
      children_counter: [0, Validators.required],
      obligatory_payments: [0, Validators.required],
      loan_repayment: [0, Validators.required],
    });
  }

  public changeStatus(e: Event): void {
    this.propertyStatus?.setValue((e.target as HTMLInputElement).value, {
      onlySelf: true,
    });
  }

  public changeFamilyStatus(e: Event): void {
    this.familyActualStatus?.setValue((e.target as HTMLInputElement).value, {
      onlySelf: true,
    });
  }

  get propertyStatus() {
    return this.userInfoForm.get('propertyStatus');
  }

  get familyActualStatus() {
    return this.userInfoForm.get('familyStatus');
  }

  constructor(private modalService: ModalService, private fb: FormBuilder) {}

  public openInsuranceModal(): void {
    this.modalService.insurancePolicDialog();
  }

  public submitRegistrationForm(userInfoForm: FormGroup): void {
    console.log(userInfoForm.value);
  }

  ngOnInit(): void {
    this.initializeForm();
  }
}
