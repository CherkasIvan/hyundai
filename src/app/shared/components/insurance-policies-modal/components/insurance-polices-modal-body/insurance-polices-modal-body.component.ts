import { Component, OnInit } from '@angular/core';

import { MockDataService } from '../../../../services/mock-data.service';

import { InsuranceOptionsInterface } from '../../../../../shared/models/interfaces/insurance-options.interface';
import { InsurancePolicyCardInterface } from '../../../../models/interfaces/insurance-policy-card.interface';

@Component({
  selector: 'app-insurance-polices-modal-body',
  templateUrl: './insurance-polices-modal-body.component.html',
  styleUrls: ['./insurance-polices-modal-body.component.scss'],
})
export class InsurancePolicesModalBodyComponent implements OnInit {
  public isHiden: boolean = true;

  public cardsObjects: InsurancePolicyCardInterface[] = [];
  public options: InsuranceOptionsInterface[] = [];

  public getCard(card: InsurancePolicyCardInterface): InsurancePolicyCardInterface[] {
    this.cardsObjects = [];
    this.cardsObjects.push(card);
    return this.cardsObjects;
  }

  public readOutputValueEmitted(val: boolean): void {
    this.isHiden = val;
  }

  constructor(private _mockDataService: MockDataService) {}

  public ngOnInit(): void {
    this.cardsObjects = this._mockDataService.insuranceCardsObjects;
    this.options = this._mockDataService.insuranceOptions;
  }
}
