import { Component, OnInit } from '@angular/core';

import { MockDataService } from '../../../../services/mock-data.service';
import { ModalService } from '../../../../services/modal.service';

import { InsuranceOptionsInterface } from '../../../../types/insurance-options.interface';
import { ModalCardInterface } from '../../../../../shared/types/modal-card.interface';

@Component({
  selector: 'app-insurance-polices-modal-body',
  templateUrl: './insurance-polices-modal-body.component.html',
  styleUrls: ['./insurance-polices-modal-body.component.scss'],
})
export class InsurancePolicesModalBodyComponent implements OnInit {
  public isHiden: boolean = true;

  public cardsObjects: ModalCardInterface[] = [];
  public options: InsuranceOptionsInterface[] = [];

  public getCard(card: ModalCardInterface): ModalCardInterface[] {
    this.cardsObjects = [];
    this.cardsObjects.push(card);
    return this.cardsObjects;
  }

  public readOutputValueEmitted(val: boolean): void {
    this.isHiden = val;
  }

  constructor(private _mockDataService: MockDataService) {}

  ngOnInit(): void {
    this.cardsObjects = this._mockDataService.insuranceCardsObjects;
    this.options = this._mockDataService.insuranceOptions;
  }
}
