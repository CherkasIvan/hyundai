import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tes-insurance-policies-modal',
  templateUrl: './insurance-policies-modal.component.html',
  styleUrls: ['./insurance-policies-modal.component.scss'],
})
export class InsurancePoliciesModalComponent implements OnInit {
  public modalTitle: string = 'Настройка страхоовых полисов';
  constructor() {}

  ngOnInit(): void {}
}
