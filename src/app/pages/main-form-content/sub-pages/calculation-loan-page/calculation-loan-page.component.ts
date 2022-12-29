import {Component, OnInit} from '@angular/core';
import { MockDataService } from '../../../../shared/services/mock-data.service';

@Component({
  selector: 'app-calculation-loan-page',
  templateUrl: './calculation-loan-page.component.html',
  styleUrls: ['./calculation-loan-page.component.scss'],
})
export class CalculationLoanPageComponent implements OnInit {
  public carOptions: object[] = [];
  public calculationSteps: object[] = [];

  constructor(private mockDataService: MockDataService) {}

  ngOnInit(): void {
    this.carOptions = this.mockDataService.calculationLoanData;
    this.calculationSteps = this.mockDataService.calculationSteps;
  }
}
