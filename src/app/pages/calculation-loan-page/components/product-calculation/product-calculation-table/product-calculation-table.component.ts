import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-calculation-table',
  templateUrl: './product-calculation-table.component.html',
  styleUrls: ['./product-calculation-table.component.scss']
})
export class ProductCalculationTableComponent implements OnInit {
  @Input() data!: unknown[];

  displayedColumns: string[] = ['product', 'credit', 'insuranceCompany', 'price'];

  constructor() { }

  ngOnInit(): void {
    console.log(this.data)
  }

}
