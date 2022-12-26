import { StepperSelectionEvent } from '@angular/cdk/stepper';
import { Component, Input, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { ProgressBarMode } from '@angular/material/progress-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { MockDataService } from '../../../../shared/services/mock-data.service';
import { StepsInterface } from './steps.interface';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss'],
})
export class SideBarComponent implements OnInit {
  public color: ThemePalette = 'primary';
  public mode: ProgressBarMode = 'determinate';
  public value: number = 50;
  public bufferValue: number = 75;

  @Input() public steps!: StepsInterface[];

  public selectedStepName: string = '';

  public selectionChanged($event: StepperSelectionEvent) {
    console.log($event);
    this.router.url.includes('loan-calculation')
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
