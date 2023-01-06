import { Component, Inject, OnInit } from '@angular/core';

import { MAT_DIALOG_DATA } from '@angular/material/dialog';

import { MockDataService } from '../../../../../../shared/services/mock-data.service';

import { InsurancePolicyCardInterface } from '../../../../../../shared/models/interfaces';
import { InsuranceOptionsInterface } from '../../../../../../shared/models/interfaces';

@Component({
  selector: 'tes-insurance-policy-calculation-dialog',
  templateUrl: './insurance-policy-calculation-dialog.component.html',
  styleUrls: ['./insurance-policy-calculation-dialog.component.scss'],
})
export class InsurancePolicyCalculationDialog implements OnInit {
  public isOptionsHidden: boolean = true;

  public cards: InsurancePolicyCardInterface[] = [];
  public options: InsuranceOptionsInterface[] = [];

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: unknown,
    private _mockDataService: MockDataService
  ) {}

  public ngOnInit(): void {
    this.cards = this._mockDataService.insuranceCardsObjects;
    this.options = this._mockDataService.insuranceOptions;
  }

  hideOptions() {
    this.isOptionsHidden = !this.isOptionsHidden;
  }
}
