import { Component, OnInit } from '@angular/core';
import {
  NavigationEnd,
  Router,
  Event as NavigationEvent,
} from '@angular/router';
import { MockDataService } from 'src/app/shared/services/mock-data.service';
import { filter } from 'rxjs';

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
      link: 'loan-calculation/car-info',
      value: 'Расчет кредита',
      index: 0,
    },
    {
      link: 'processing/client-info',
      value: 'Оформление',
      index: 1,
    },
    {
      link: 'documents-payments',
      value: 'Документы и платежи',
      index: 2,
    },
  ];

  public calculationSteps = [];
  constructor(private mockServise: MockDataService, private _router: Router) {
    this.getRout();
  }

  public getRout() {
    this._router.events
      .pipe(filter((event: NavigationEvent) => event instanceof NavigationEnd))
      .subscribe((el: any) => {
        this.routerLink = el.urlAfterRedirects;
        this._router.url.includes('loan-calculation')
          ? (this.calculationSteps = this.mockServise.calculationSteps)
          : (this.calculationSteps = this.mockServise.processingSteps);
      });
  }

  ngOnInit(): void {}
}
