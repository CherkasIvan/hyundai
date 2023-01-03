import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { StepperSelectionEvent } from '@angular/cdk/stepper';

import { MockDataService } from '../../../../shared/services/mock-data.service';

import { routingPathEnum } from 'src/app/shared/consts/routing-path-enum';

import { StepsInterface } from '../../models/interfaces/steps.interface';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss'],
})
export class SideBarComponent implements OnInit {
  public value: number = 50;
  public bufferValue: number = 75;

  @Input() public steps!: StepsInterface[];

  public selectedStepName: string = '';

  public selectionChanged($event: StepperSelectionEvent) {
    this.router.url.includes(routingPathEnum.LoanCalculationPage)
      ? (this.selectedStepName =
          this.mockData.calculationSteps[$event.selectedIndex].path)
      : (this.selectedStepName =
          this.mockData.processingSteps[$event.selectedIndex].path);

    let route: ActivatedRoute | null = this.activatedRoute.firstChild;
    this.router.navigate([this.selectedStepName], {
      relativeTo: route,
    });
  }

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private mockData: MockDataService
  ) {}

  ngOnInit(): void {}
}
