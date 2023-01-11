import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';

import { MatDialog } from '@angular/material/dialog';
import { InsurancePolicyCalculationDialog } from './dialogs/insurance-policy-calculation-dialog/insurance-policy-calculation-dialog.component';
import { filter, map, Observable, Subject, takeUntil } from 'rxjs';
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
export class ProductCalculationPageComponent implements OnInit {
  public productCalculationTitle: string = 'Расчет страховых полисов';
  public loading!: boolean;
  public data = [
    {
      product: 'КАСКО',
      credit: false,
      insuranceCompany: 'sovkom-logo',
      price: '45000',
    },
    // {
    //   product: 'КАСКО',
    //   credit: false,W
    //   insuranceCompany: 'vsk',
    //   price: '46000',
    // },
    // {
    //   product: 'ОСАГО',
    //   credit: false,
    //   insuranceCompany: 'vsk',
    //   price: '11500',
    // },
    {
      product: 'ОСАГО',
      credit: true,
      insuranceCompany: 'sovkom-logo',
      price: '10000',
    },
  ];

  private error$!: Observable<boolean>;
  private _unsubscribeAll: Subject<void> = new Subject();

  constructor(
    private router: Router,
    private dialog: MatDialog,
    private store: Store<GlobalState>,
    private calculationLoanService: CalculationLoanService
  ) {}

  ngOnInit(): void {
    this.store
      .pipe(select(selectCascoPolicies), takeUntil(this._unsubscribeAll))
      .subscribe((policies: any) => this.initializeData(policies));

    this.store
      .pipe(select(selectCascoLoading), takeUntil(this._unsubscribeAll))
      .subscribe((loading) => {
        if (loading) {
          console.log('casco policies data is loading');
        }
        this.loading = loading;
      });
    this.error$ = this.store.pipe(select(selectCascoError));
  }

  ngAfterViewInit() {
    if (this.data.length < 1) this.loadCascoPolicies();
  }

  private loadCascoPolicies(): void {
    this.store.dispatch(
      getCascoPolicies({
        params: {
          policyStartDate: '2023-01-15T00:00:00.000+03:00',
          insuranse_term: 1,
          multidrive: true,
          drivers: [],
          owner_is_insurer: true,
          insurer: {},
        },
      })
    );
  }

  initializeData(cascoPoliciesData: any[]): void {
    this.data = [...this.data, ...cascoPoliciesData];
    // localStorage.setItem('calculation_id', this.data[0].calculation_id);

    console.log(this.data);
  }

  onCreateCasco(): void {
    this.calculationLoanService
      .createCascoPolicy({}, localStorage.getItem('calculation_id') as string)
      .pipe(
        // todo: to move in the ngrx store
        map((data) => {
          localStorage.setItem('createdCascoOffers', JSON.stringify(data));
          this.router.navigate(['main-page/documents-payments']);
        }),
        takeUntil(this._unsubscribeAll)
      )
      .subscribe();
  }

  openCalculateDialog() {
    const dialog = this.dialog.open(InsurancePolicyCalculationDialog, {
      data: this.data,
    });

    dialog
      .afterClosed()
      .pipe(
        filter((data) => data),
        map((data) => {
          console.log(data);
        })
      )
      .subscribe();
  }

  ngOnDestroy(): void {
    this._unsubscribeAll.next();
    this._unsubscribeAll.complete();
  }
}
