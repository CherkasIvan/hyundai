import { Component, OnInit } from '@angular/core';

import { MockDataService } from '../../../../services/mock-data.service';
import { ModalService } from '../../../../services/modal.service';

@Component({
  selector: 'app-insurance-polices-modal-body',
  templateUrl: './insurance-polices-modal-body.component.html',
  styleUrls: ['./insurance-polices-modal-body.component.scss'],
})
export class InsurancePolicesModalBodyComponent implements OnInit {
  public isHiden: boolean = false;

  public cardsObjects: any = [];
  public options: any = [];

  public getCard(card: any): Object {
    this.cardsObjects = [];
    this.cardsObjects.push(card);
    return this.cardsObjects;
  }

  constructor(
    public modalService: ModalService,
    private mockDataService: MockDataService
  ) {}

  ngOnInit(): void {
    this.cardsObjects = this.mockDataService.insuranceCardsObjects;
    this.options = this.mockDataService.insuranceOptions;
  }
}
