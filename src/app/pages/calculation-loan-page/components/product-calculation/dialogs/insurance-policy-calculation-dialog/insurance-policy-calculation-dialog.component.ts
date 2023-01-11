import { Component, Inject, OnInit } from '@angular/core';

import { MAT_DIALOG_DATA } from '@angular/material/dialog';

import { MockDataService } from '../../../../../../shared/services/mock-data.service';

@Component({
  selector: 'tes-insurance-policy-calculation-dialog',
  templateUrl: './insurance-policy-calculation-dialog.component.html',
  styleUrls: ['./insurance-policy-calculation-dialog.component.scss'],
})
export class InsurancePolicyCalculationDialog implements OnInit {
  public selectedOptions: any = null;

  public policies: any[] = [];

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _mockDataService: MockDataService,
  ) {
  }

  public ngOnInit(): void {
    this.policies = [...this.policies, ...this.data];
  }

  onShowOptions(event: any) {
    if (!this.selectedOptions) return this.selectedOptions = event;
    this.selectedOptions = {...event}
    console.log(this.selectedOptions);
  }
}
