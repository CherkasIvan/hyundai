import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router, Event, ActivatedRoute } from '@angular/router';

import { filter } from 'rxjs';

import { routingPathEnum } from '../../shared/consts/routing-path-enum';

import { StepsInterface } from './models/interfaces/steps.interface';

@Component({
  selector: 'tes-main-form-content-page',
  templateUrl: './main-form-content-page.component.html',
  styleUrls: ['./main-form-content-page.component.scss'],
})
export class MainFormContentPageComponent implements OnInit {
  public routerLink!: string;
  public selectedIndex: number = 0;
  public isActive: boolean = true;

  public calculationPagesSteps: StepsInterface[] = [
    {
      content: 'Информация об автомобиле',
      title: 'Информация об автомобиле',
      path: 'car-info',
    },
    {
      content: 'Собственник',
      title: 'Кредитные и страховые продукты',
      path: 'owner',
    },
    { content: 'Водители', title: 'Параметры кредита', path: 'drivers' },
    {
      content: 'Параметры кредита',
      title: 'Параметры страховых продуктов',
      path: 'loan-params',
    },
    {
      content: 'Параметры страховых продуктов',
      title: 'Параметры страховых продуктов',
      path: 'insurances-params',
    },
    {
      content: 'Расчет продуктов',
      title: 'Расчет страховых полисов',
      path: 'product-calculation',
    },
  ];

  public processingPagesSteps: StepsInterface[] = [
    { content: 'Личная информация', title: 'Оформление ', path: 'client-info' },
    { content: 'Работа', title: 'Работа', path: 'client-job' },
    { content: 'Сводка', title: 'Кредит', path: 'client-summary' },
    { content: 'Одобрение', title: 'Кредит', path: 'client-approval' },
  ];

  public navigationLinks = [
    {
      link: `${routingPathEnum.LoanCalculationPage}/${routingPathEnum.CarInfo}`,
      value: 'Расчет кредита',
      index: 0,
    },
    {
      link: `${routingPathEnum.ProcessingPage}/${routingPathEnum.ClientInfo}`,
      value: 'Оформление',
      index: 1,
    },
    {
      link: `${routingPathEnum.DocumentsAndPaymentsPage}`,
      value: 'Документы и платежи',
      index: 2,
    },
  ];

  public navigationSteps: StepsInterface[] = [];
  constructor(
    private _router: Router,
    private _activatedRoute: ActivatedRoute
  ) {
    this.getRout();
  }

  public getRout() {
    this._router.events
      .pipe(
        filter(
          (event: Event): event is NavigationEnd =>
            event instanceof NavigationEnd
        )
      )
      .subscribe((el: NavigationEnd) => {
        this.routerLink = el.urlAfterRedirects;
        // console.log(this._activatedRoute.firstChild?.routeConfig?.path); // ИСПОЛЬЗОВАТЬ ДЛЯ NgClass
        if (this._activatedRoute.firstChild?.routeConfig?.path) {
          if (
            this.routerLink.includes(
              this._activatedRoute.firstChild?.routeConfig?.path
            )
          ) {
            this.isActive = true;
          }
        }

        if (this._router.url.includes(routingPathEnum.LoanCalculationPage)) {
          this.navigationSteps = this.calculationPagesSteps;
        } else if (this._router.url.includes(routingPathEnum.ProcessingPage)) {
          this.navigationSteps = this.processingPagesSteps;
        }
      });
  }

  ngOnInit(): void {}
}
