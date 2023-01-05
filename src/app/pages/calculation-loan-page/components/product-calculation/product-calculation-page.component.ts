import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {
  InsurancePoliceCalculationDialog
} from './dialogs/insurance-policy-calculation-dialog/insurance-policy-calculation-dialog.component';
import { filter, map } from 'rxjs';

@Component({
  selector: 'app-product-calculation-page',
  templateUrl: './product-calculation-page.component.html',
  styleUrls: ['./product-calculation-page.component.scss']
})
export class ProductCalculationPageComponent implements OnInit {
  public data = [
    {
      product: '123',
      credit: '123',
      insuranceCompany: '123',
      price: '123',
    }
  ];

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openCalculateDialog() {
    const dialog = this.dialog.open(InsurancePoliceCalculationDialog);

    dialog.afterClosed().pipe(
      filter(data => data),
      map(data => {
        console.log(data);
      }),
    ).subscribe()
  }
}
