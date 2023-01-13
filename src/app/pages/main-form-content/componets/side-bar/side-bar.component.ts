import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { StepperSelectionEvent } from '@angular/cdk/stepper';

import { routingPathEnum } from '../../../../shared/consts/routing-path-enum';

import { StepsInterface } from '../../models/interfaces/steps.interface';
import { SideBarService } from '../../services/side-bar.service';
import { FormsValidityService } from 'src/app/shared/services/forms-validity.service';

@Component({
  selector: 'tes-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss'],
})
export class SideBarComponent implements OnInit {
  public sideBarPercantage!: number;
  public isComleted: boolean = false;

  @Input() public steps!: StepsInterface[];

  public selectedStepName: string = '';

  public selectionChanged($event: StepperSelectionEvent) {
    this._sideBarService.initIndex$.next($event.selectedIndex);
    console.log($event);

    this._router.url.includes(routingPathEnum.LoanCalculationPage)
      ? (this.selectedStepName = this.steps[$event.selectedIndex].path)
      : (this.selectedStepName = this.steps[$event.selectedIndex].path);

    let route: ActivatedRoute | null = this._activatedRoute.firstChild;

    this._router.navigate([this.selectedStepName], {
      relativeTo: route,
    });
    this.sideBarPercantage =
      Math.round(100 / this.steps.length) * $event.selectedIndex;
  }

  constructor(
    private _sideBarService: SideBarService,
    private _router: Router,
    private _activatedRoute: ActivatedRoute,
    public formsValidityService: FormsValidityService
  ) {}

  ngOnInit(): void {
    this._sideBarService.setIndex(this.steps).subscribe((el) => {
      this.sideBarPercantage = el;
    });
    this.formsValidityService.formsValidity$.subscribe((formsValue) => {
      this.isComleted = formsValue;
    });
  }
}
