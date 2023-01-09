import {
  Component,
  OnInit,
  TemplateRef,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ImagePickerConf } from 'ngp-image-picker';

import { ModalService } from '../../../../shared/services/modal.service';

@Component({
  selector: 'tes-client-info',
  templateUrl: './client-info.component.html',
  styleUrls: ['./client-info.component.scss'],
})
export class ClientInfoComponent implements OnInit {
  @ViewChild('img', { read: TemplateRef }) public img!: TemplateRef<any>;
  @ViewChild('content', { read: ViewContainerRef })
  public contentRef!: ViewContainerRef;
  public imgCounter: number = 0;

  public config: ImagePickerConf = {
    borderRadius: '8px',
    width: '70px',
    height: '70px',
    language: 'ru',
    hideDeleteBtn: true,
    hideDownloadBtn: true,
    hideEditBtn: true,
    hideAddBtn: true,
  };

  public onImageChange(e: any) {
    // console.log(e);
  }

  public createNewUploader(): void {
    const descriptionsArr = [
      'Главный разворот',
      'Паспорт, разворот с регистрацией',
    ];
    this.imgCounter = this.contentRef.length;

    this.contentRef.createEmbeddedView(this.img, {
      $implicit: { descriptions: descriptionsArr[this.imgCounter] },
    });
  }

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
      passport_issue_date: ['', Validators.required],
      residential_address: ['', Validators.required],
      registration_date: ['', Validators.required],
      address_of_actual_residence: ['', Validators.required],
      matched_client_registered_address: ['', Validators.required],
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
    this.modalService.insurancePolicyDialog();
  }

  public submitRegistrationForm(userInfoForm: FormGroup): void {
    console.log(userInfoForm.value);
  }

  ngOnInit(): void {
    this.initializeForm();
  }
}
