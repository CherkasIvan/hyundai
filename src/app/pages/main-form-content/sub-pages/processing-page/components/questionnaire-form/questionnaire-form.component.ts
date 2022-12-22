import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { ModalService } from '../../../../../../shared/services/modal.service';

@Component({
  selector: 'app-questionnaire-form',
  templateUrl: './questionnaire-form.component.html',
  styleUrls: ['./questionnaire-form.component.scss'],
})
export class QuestionnaireFormComponent implements OnInit {
  public questionniarForm!: FormGroup;

  public educations: string[] = [
    'Высшее',
    '2 и более высших',
    'Учёная степень',
    'Средне-специальное',
    'Среднее',
    'Начальное или неполное среднее',
  ];
  public selectedIndex: number = 0;
  public activateClass(index: number) {
    this.selectedIndex = index;
  }

  public initializeForm(): void {
    this.questionniarForm = this.fb.group({
      passport_seria: ['', Validators.required],
      born_place: ['', Validators.required],
      passport_office: ['', Validators.required],
      date: ['', Validators.required],
      passport_chenged: ['', Validators.required],
      propertyStatus: ['', Validators.required],
      familyStatus: ['', Validators.required],
      children_counter: [0, Validators.required],
      obligatory_payments: [0, Validators.required],
      loan_repaymentuserForm: [0, Validators.required],
    });
  }

  public changeStatus(e: any) {
    this.propertyStatus?.setValue(e.target.value, {
      onlySelf: true,
    });
  }

  public changeFamilyStatus(e: any) {
    this.familyActualStatus?.setValue(e.target.value, {
      onlySelf: true,
    });
  }

  get propertyStatus() {
    return this.questionniarForm.get('propertyStatus');
  }

  get familyActualStatus() {
    return this.questionniarForm.get('familyStatus');
  }

  constructor(private modalService: ModalService, private fb: FormBuilder) {}

  public openInsuranceModal(): void {
    this.modalService.insurancePolicDialog();
  }

  public submitRegistrationForm(questionniarForm: FormGroup): void {
    const body = questionniarForm.value;
    body.educations = this.educations[this.selectedIndex];
    console.log(body);
  }

  ngOnInit(): void {
    this.initializeForm();
  }
}
