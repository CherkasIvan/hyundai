import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss'],
})
export class WorkComponent implements OnInit {
  public userWorksForm!: FormGroup;
  public selectedIndex: number = 0;
  public actualValue!: number;

  public activateClass(index: number) {
    this.selectedIndex = index;
  }

  public statuses: string[] = [
    'Высшее',
    '2 и более высших',
    'Учёная степень',
    'Средне-специальное',
    'Среднее',
    'Начальное или неполное среднее',
  ];

  public addItem(newCounterValue: number) {
    this.actualValue = newCounterValue;
    console.log(this.actualValue);
  }

  public initializeForm(): void {
    this.userWorksForm = this._fb.group({
      organization_name: ['', Validators.required],
      office_phone: ['', Validators.required],
      start_work: ['', Validators.required],
      work_experience: ['', Validators.required],
      company_position: ['', Validators.required],
      type_position: ['', Validators.required],
      number_of_employes: ['', Validators.required],
    });
  }

  public changeStatus(e: any) {
    this.workExperience?.setValue(e.target.value, {
      onlySelf: true,
    });
  }

  get workExperience() {
    return this.userWorksForm.get('work_experience');
  }

  public submitRegistrationForm(userInfoForm: FormGroup): void {
    const body = userInfoForm.value;
    body.work_status = this.statuses[this.selectedIndex];
    body.income = this.actualValue;
    console.log(body);
  }

  constructor(private _fb: FormBuilder) {}

  ngOnInit(): void {
    this.initializeForm();
  }
}