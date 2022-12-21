import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-form-content-page',
  templateUrl: './main-form-content-page.component.html',
  styleUrls: ['./main-form-content-page.component.scss'],
})
export class MainFormContentPageComponent implements OnInit {
  public calculationSteps = [
    { content: 'Информация об автомобиле' },
    { content: 'Собственник' },
    { content: 'Водители' },
    { content: 'Параметры кредита' },
    { content: 'Параметры страховых продуктов' },
    { content: 'Расчет продуктов' },
  ];
  constructor() {}

  ngOnInit(): void {}
}
