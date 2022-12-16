import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-calculation-loan-page',
  templateUrl: './calculation-loan-page.component.html',
  styleUrls: ['./calculation-loan-page.component.scss'],
})
export class CalculationLoanPageComponent implements OnInit {
  public calculationSteps = [
    {content: 'Информация об автомобиле'},
    {content: 'Собственник'},
    {content: 'Водители'},
    {content: 'Параметры кредита'},
    {content: 'Параметры страховых продуктов'},
    {content: 'Расчет продуктов'},
  ];

  constructor() {}

  ngOnInit(): void {}
}
