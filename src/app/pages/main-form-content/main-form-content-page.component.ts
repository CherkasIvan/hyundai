import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MockDataService } from 'src/app/shared/services/mock-data.service';

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
  constructor(private mockServise: MockDataService, private router: Router) {}

  ngOnInit(): void {}
}
