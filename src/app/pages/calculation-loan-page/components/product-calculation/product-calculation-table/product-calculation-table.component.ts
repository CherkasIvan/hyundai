import { Component, Input, OnInit } from '@angular/core';
import { CascoObject } from 'src/app/shared/models/interfaces/casco';

@Component({
  selector: 'tes-product-calculation-table',
  templateUrl: './product-calculation-table.component.html',
  styleUrls: ['./product-calculation-table.component.scss'],
})
export class ProductCalculationTableComponent implements OnInit {
  @Input() public data!: CascoObject[] | any[];

  public displayedColumns: string[] = [
    'product',
    'credit',
    'provider',
    'total_summ',
  ];

  constructor() {}

  ngOnInit(): void {
  }
}
