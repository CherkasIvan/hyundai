import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MockDataService } from 'src/app/shared/services/mock-data.service';

@Component({
  selector: 'app-main-form-content-page',
  templateUrl: './main-form-content-page.component.html',
  styleUrls: ['./main-form-content-page.component.scss'],
})
export class MainFormContentPageComponent implements OnInit {
  public routerLink!: string;
  public selectedIndex: number = 0;
  public navigationLinks = [
    {
      link: 'loan-calculation/car_info',
      value: 'Расчет кредита',
    },
    {
      link: 'processing/user_info',
      value: 'Оформление',
    },
    {
      link: 'documents-payments',
      value: 'Документы и платежи',
    },
  ];

  public calculationSteps = [];
  constructor(private mockServise: MockDataService, private _router: Router) {}

  public getIndex(index: number) {
    this.routerLink = this._router.url;
    console.log(this.routerLink);

    this.selectedIndex = index;
    this._router.url.includes('loan-calculation')
      ? (this.calculationSteps = this.mockServise.calculationSteps)
      : (this.calculationSteps = this.mockServise.processingSteps);
  }

  ngOnInit(): void {
    this.getIndex(this.selectedIndex);
  }
}
