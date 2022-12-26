import { Component, OnInit } from '@angular/core';

import { MockDataService } from '../../../../services/mock-data.service';
import { ModalService } from '../../../../services/modal.service';
import { ModalCard } from '../../types/modal-card.interface';

@Component({
  selector: 'app-insurance-polices-modal-body',
  templateUrl: './insurance-polices-modal-body.component.html',
  styleUrls: ['./insurance-polices-modal-body.component.scss'],
})
export class InsurancePolicesModalBodyComponent implements OnInit {
  public isHiden: boolean = true;

  public cardsObjects: any = [];
  public options: any[] = [];

  public getCard(card: ModalCard): Object {
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
