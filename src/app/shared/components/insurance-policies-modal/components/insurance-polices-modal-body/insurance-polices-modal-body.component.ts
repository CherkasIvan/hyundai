import { Component, OnInit } from '@angular/core';

import { MockDataService } from '../../../../services/mock-data.service';
import { ModalService } from '../../../../services/modal.service';

import { InsuranceOptionsInterface } from '../../types/insurance-options.interface';
import { ModalCardInterface } from '../../types/modal-card.interface';

@Component({
  selector: 'app-insurance-polices-modal-body',
  templateUrl: './insurance-polices-modal-body.component.html',
  styleUrls: ['./insurance-polices-modal-body.component.scss'],
})
export class InsurancePolicesModalBodyComponent implements OnInit {
  public isHiden: boolean = true;

  public cardsObjects: ModalCardInterface[] = [];
  public options: InsuranceOptionsInterface[] = [];

  public getCard(card: ModalCardInterface): Object {
    this.cardsObjects = [];
    this.cardsObjects.push(card);
    return this.cardsObjects;
  }

  public readOutputValueEmitted(val: boolean) {
    this.isHiden = val;
  }

  constructor(
    public modalService: ModalService,
    private mockDataService: MockDataService
  ) {}

  ngOnInit(): void {
    this.cardsObjects = this.mockDataService.insuranceCardsObjects;
    this.options = this.mockDataService.insuranceOptions;
    console.log(this.options);
  }
}
