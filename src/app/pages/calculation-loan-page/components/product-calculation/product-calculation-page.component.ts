import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { InsurancePolicyCalculationDialog } from './dialogs/insurance-policy-calculation-dialog/insurance-policy-calculation-dialog.component';
import { filter, map } from 'rxjs';

@Component({
  selector: 'tes-product-calculation-page',
  templateUrl: './product-calculation-page.component.html',
  styleUrls: ['./product-calculation-page.component.scss'],
})
export class ProductCalculationPageComponent implements OnInit {
  public productCalculationTitle: string = 'Расчет страховых полисов';
  public data = [
    {
      product: 'КАСКО',
      credit: false,
      insuranceCompany: 'sovkom',
      price: '45000',
    },
    // {
    //   product: 'КАСКО',
    //   credit: false,W
    //   insuranceCompany: 'vsk',
    //   price: '46000',
    // },
    // {
    //   product: 'ОСАГО',
    //   credit: false,
    //   insuranceCompany: 'vsk',
    //   price: '11500',
    // },
    {
      product: 'ОСАГО',
      credit: true,
      insuranceCompany: 'sovkom',
      price: '10000',
    },
  ];

  constructor(private dialog: MatDialog) {}

  ngOnInit(): void {}

  openCalculateDialog() {
    const dialog = this.dialog.open(InsurancePolicyCalculationDialog);

    dialog
      .afterClosed()
      .pipe(
        filter((data) => data),
        map((data) => {
          console.log(data);
        })
      )
      .subscribe();
  }
}
