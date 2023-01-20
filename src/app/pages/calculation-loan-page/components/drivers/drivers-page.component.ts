import { Component, OnDestroy, OnInit } from '@angular/core';
import { CalculationLoanService } from '../../../../shared/services/calculation-loan.service';
import { Observable, Subject, takeUntil, tap } from 'rxjs';
import { Driver } from '../../../../shared/models/interfaces/driver';

@Component({
  selector: 'tes-drivers',
  templateUrl: './drivers-page.component.html',
  styleUrls: ['./drivers-page.component.scss'],
})
export class DriversPageComponent implements OnInit, OnDestroy {
  drivers$!: Observable<any>;

  private _unsubscribeAll: Subject<void> = new Subject();

  constructor(private calculationLoanService: CalculationLoanService) {
  }

  ngOnInit() {
    this.drivers$ = this.calculationLoanService
      .getClientDrivers()
      .pipe(
        takeUntil(this._unsubscribeAll),
      );
  }

  public addDrivers(drivers: Driver[]): void {
      this.calculationLoanService.addDrivers(drivers)
        .pipe(
          tap(data => console.log(data)),
          takeUntil(this._unsubscribeAll),
        )
        .subscribe()
  }

  public updateDrivers(drivers: Driver[]): void {
    console.log('update drivers', drivers);
  }

  ngOnDestroy() {
    this._unsubscribeAll.next();
    this._unsubscribeAll.complete();
  }
}
