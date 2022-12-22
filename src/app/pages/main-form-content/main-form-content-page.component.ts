import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MockDataService } from 'src/app/shared/services/mock-data.service';

@Component({
  selector: 'app-main-form-content-page',
  templateUrl: './main-form-content-page.component.html',
  styleUrls: ['./main-form-content-page.component.scss'],
})
export class MainFormContentPageComponent implements OnInit {
  public isNone: boolean = false;
  public selectedIndex: number = 0;
  public navigationLinks = [
    {
      link: 'loan-calculation',
      value: 'Расчет кредита',
    },
    {
      link: 'processing',
      value: 'Оформление',
    },
    {
      link: 'documents-payments',
      value: 'Документы и платежи',
    },
  ];

  public calculationSteps = [];
  constructor(private mockServise: MockDataService, private router: Router) {}

  public getIndex(index: number) {
    this.selectedIndex = index;
    this.router.url.includes('loan-calculation')
      ? (this.calculationSteps = this.mockServise.calculationSteps)
      : (this.calculationSteps = this.mockServise.processingSteps);
  }

  ngOnInit(): void {
    this.router.url.includes('documents-payments')
      ? (this.isNone = !this.isNone)
      : this.isNone;
    this.getIndex(this.selectedIndex);
  }
}
