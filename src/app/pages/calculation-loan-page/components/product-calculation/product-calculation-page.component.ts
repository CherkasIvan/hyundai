import { Component, OnDestroy } from '@angular/core';

import { MatDialog } from '@angular/material/dialog';

import { InsurancePoliceCalculationDialog } from './dialogs/insurance-policy-calculation-dialog/insurance-policy-calculation-dialog.component';

import { filter, map, Subscription } from 'rxjs';

@Component({
  selector: 'tes-product-calculation-page',
  templateUrl: './product-calculation-page.component.html',
  styleUrls: ['./product-calculation-page.component.scss'],
})
export class ProductCalculationPageComponent implements OnDestroy {
  public productCalculationPageSub$: Subscription = new Subscription();

  public data = [
    {
      product: '123',
      credit: '123',
      insuranceCompany: '123',
      price: '123',
    },
  ];

  constructor(private dialog: MatDialog) {}

  public openCalculateDialog() {
    const dialog = this.dialog.open(InsurancePoliceCalculationDialog);

    this.productCalculationPageSub$.add(
      dialog
        .afterClosed()
        .pipe(
          filter((data) => data),
          map((data) => {
            console.log(data);
          })
        )
        .subscribe()
    );
  }

  ngOnDestroy(): void {
    this.productCalculationPageSub$.unsubscribe();
  }
}
