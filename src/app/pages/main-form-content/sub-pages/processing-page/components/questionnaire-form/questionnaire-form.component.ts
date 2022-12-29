import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { ModalService } from '../../../../../../shared/services/modal.service';

@Component({
  selector: 'app-questionnaire-form',
  templateUrl: './questionnaire-form.component.html',
  styleUrls: ['./questionnaire-form.component.scss'],
})
export class QuestionnaireFormComponent implements OnInit {
  public formRegistration = new FormGroup({});
  public model: object = {};
  public passportFields: FormlyFieldConfig[] = [];

  constructor(private modalService: ModalService) {}

  public openInsuranceModal(): void {
    this.modalService.insurancePolicDialog();
  }

  public submitRegistrationForm(model: object): void {
    console.log(model);
  }

  ngOnInit(): void {}
}
