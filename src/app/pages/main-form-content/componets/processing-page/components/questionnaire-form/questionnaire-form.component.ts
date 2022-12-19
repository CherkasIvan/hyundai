import {Component, OnInit} from '@angular/core';
import {ModalService} from 'src/app/pages/shared/services/modal.service';

@Component({
  selector: 'app-questionnaire-form',
  templateUrl: './questionnaire-form.component.html',
  styleUrls: ['./questionnaire-form.component.scss'],
})
export class QuestionnaireFormComponent implements OnInit {
  constructor(private modalService: ModalService) {}

  public openInsuranceModal(): void {
    this.modalService.insurancePolicDialog();
  }

  ngOnInit(): void {}
}
