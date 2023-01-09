import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'tes-product-calculation-table',
  templateUrl: './product-calculation-table.component.html',
  styleUrls: ['./product-calculation-table.component.scss'],
})
export class ProductCalculationTableComponent implements OnInit {
  @Input() public data!: unknown[];

  public displayedColumns: string[] = [
    'product',
    'credit',
    'insuranceCompany',
    'price',
  ];

  constructor() {}

  ngOnInit(): void {}
}
