import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';

import { MatDialog } from '@angular/material/dialog';
import {
  InsurancePolicyCalculationDialog,
} from './dialogs/insurance-policy-calculation-dialog/insurance-policy-calculation-dialog.component';
import { filter, forkJoin, map, Observable, Subject, takeUntil } from 'rxjs';
import { select, Store } from '@ngrx/store';
import {
  selectCascoPolicies,
  selectCascoError,
  selectCascoLoading,
} from '../../store/selectors/casco-policies.selectors';
import { CascoObject } from '../../../../shared/models/interfaces/casco';
import { GlobalState } from '../../store/states/global.state';
import { getCascoPolicies } from '../../store/calculationLoanPage.action';
import { CalculationLoanService } from '../../../../shared/services/calculation-loan.service';
import { Router } from '@angular/router';

@Component({
  selector: 'tes-product-calculation-page',
  templateUrl: './product-calculation-page.component.html',
  styleUrls: ['./product-calculation-page.component.scss'],
})
export class ProductCalculationPageComponent implements OnInit, AfterViewInit, OnDestroy {
  public policiesData: CascoObject[] | any[] = [];
  public loading!: boolean;

  private error$!: Observable<boolean>;
  private _unsubscribeAll: Subject<void> = new Subject();

  constructor(
    private router: Router,
    private dialog: MatDialog,
    private store: Store<GlobalState>,
    private calculationLoanService: CalculationLoanService,
  ) {
  }

  ngOnInit(): void {
    this.getCasco();
    this.getOsago();
  }

  ngAfterViewInit() {
    this.loadCascoPolicies();
  }

  getCasco(): void {
    this.store
      .pipe(
        select(selectCascoPolicies),
        takeUntil(this._unsubscribeAll),
      )
      .subscribe((policies: any) => this.initializeData(policies));

    this.store.pipe(
      select(selectCascoLoading),
      takeUntil(this._unsubscribeAll),
    ).subscribe((loading) => {
      if (loading) {
        console.log('casco policies data is loading');
      }
      this.loading = loading;
    });
    this.error$ = this.store.pipe(select(selectCascoError));
  }

  private loadCascoPolicies(): void {
    this.store.dispatch(
      getCascoPolicies({
        params: {
          policyStartDate: '2023-02-15T00:00:00.000+03:00',
          insuranse_term: 1,
          multidrive: true,
          drivers: [],
          owner_is_insurer: true,
          insurer: {},
        },
      }),
    );
  }

  getOsago(): void {
    this.calculationLoanService.getOsagoPolicies({}, undefined)
      .pipe(
        map(osagoPoliciesData => {
          this.policiesData = [...this.policiesData, ...[osagoPoliciesData]];
          // this.policiesData.push(osagoPoliciesData);
        })
      )
      .subscribe();
  }

  initializeData(cascoPoliciesData: CascoObject[]): void {
    this.policiesData = [...this.policiesData, ...cascoPoliciesData];
  }

  onCreatePolicies(): void {
    const casco$ = this.calculationLoanService
      .createCascoPolicy(
        {},
        '',
      )
      .pipe(
        // todo: to move in the ngrx store
        map(data => {
          localStorage.setItem('createdCascoOffers', JSON.stringify(data));
        }),
        takeUntil(this._unsubscribeAll),
      );

    const osago$ = this.calculationLoanService
      .createOsagoPolicy(
        '',
      )
      .pipe(
        map(data => {
          localStorage.setItem('createdOsagoOffers', JSON.stringify(data));
        }),
        takeUntil(this._unsubscribeAll),
      );

    forkJoin([casco$, osago$]).pipe().subscribe(r =>
      this.router.navigate(['main-page/documents-payments'])
    );
  }

  openCalculateDialog() {
    const dialog = this.dialog.open(InsurancePolicyCalculationDialog, {
      data: this.policiesData,
    });

    dialog
      .afterClosed()
      .pipe(
        filter((data) => data),
        map((data) => {
          console.log(data);
        }),
      )
      .subscribe();
  }

  ngOnDestroy(): void {
    this._unsubscribeAll.next();
    this._unsubscribeAll.complete();
  }
}
