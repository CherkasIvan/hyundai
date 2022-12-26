import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router, Event, RouterEvent } from '@angular/router';
import { MockDataService } from 'src/app/shared/services/mock-data.service';
import { filter } from 'rxjs';
import { StepsInterface } from './componets/side-bar/steps.interface';
import { routingPathEnum } from 'src/app/shared/consts/routing-path-enum';

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

  public calculationSteps: StepsInterface[] = [];
  constructor(private mockServise: MockDataService, private _router: Router) {
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
        this._router.url.includes(routingPathEnum.LoanCalculationPage)
          ? (this.calculationSteps = this.mockServise.calculationSteps)
          : (this.calculationSteps = this.mockServise.processingSteps);
      });
  }

  ngOnInit(): void {}
}
