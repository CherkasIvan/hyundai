import {
  AfterViewInit,
  Component,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { Router } from '@angular/router';

import { MatPaginator } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { select, Store } from '@ngrx/store';

import { Observable, Subscription } from 'rxjs';

import { PersistenceService } from '../../../../shared/services/persistence.service';
// import { GetUsersService } from '../../services/get-users.service';

import { routingPathEnum } from '../../../../shared/consts/routing-path-enum';
import { authBrokerAction } from '../../../broker-auth-page/store/broker-auth.action';
import { isBrokerSubmittingSelector } from '../../../broker-auth-page/store/broker-auth.selectors';
import { ClientAuthService } from '../../services/client-auth.service';
import { getCarsOwnersListAction, setSelectedClientIdAction } from '../../store/actions/client-filter-page.actions';
import {
  clientFilterPageFeatureSelector,
  getCarsOwnersListSelector,
  getSelectedClientIdSelector,
} from '../../store/selectors/client-filter-page.selectors';

@Component({
  selector: 'tes-clients-list',
  templateUrl: './clients-list.component.html',
  styleUrls: ['./clients-list.component.scss'],
})
export class ClientsListComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild(MatPaginator, { static: true }) public paginator!: MatPaginator;
  @ViewChild(MatSort, { static: true }) public sort!: MatSort;

  public clientsListSub$: Subscription = new Subscription();
  public dataSource: MatTableDataSource<any> = new MatTableDataSource();
  public sortedData: any;
  public client_profile: any;
  public carsOwnersList$!: Observable<any>;

  public displayedColumns: string[] = [
    'ФИО',
    'Марка авто',
    'модель',
    'vin',
    'КАСКО',
    'ОСАГО',
    'кредитные продукты',
    'Телефон',
  ];

  constructor(
    private _authClientService: ClientAuthService,
    private _persistenceService: PersistenceService,
    private _router: Router,
    private readonly _store: Store
  ) {
    this._store.dispatch(getCarsOwnersListAction())
  }

  public compare(a: number | string, b: number | string, isAsc: boolean) {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
  }

  public sortData(sort: Sort) {
    const data = this.dataSource.data.slice();
    if (!sort.active || sort.direction === '') {
      this.sortedData = data;
      return;
    }

    this.sortedData = data.sort((a: any, b: any) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'ФИО':
          return this.compare(a.first_name, b.first_name, isAsc);
        case 'Марка авто':
          return this.compare(a.calories, b.calories, isAsc);
        case 'модель':
          return this.compare(a.fat, b.fat, isAsc);
        case 'vin':
          return this.compare(a.carbs, b.carbs, isAsc);
        case 'КАСКО':
          return this.compare(a.protein, b.protein, isAsc);
        case 'ОСАГО':
          return this.compare(a.protein, b.protein, isAsc);
        case 'кредитные продукты':
          return this.compare(a.protein, b.protein, isAsc);
        case 'Телефон':
          return this.compare(a.protein, b.protein, isAsc);
        default:
          return 0;
      }
    });
  }

  public ngOnInit(): void {

    // this.clientsListSub$.add(
    //   this._authClientService.getClients().subscribe((el) => {
    //   // this.dataSource.data = el.clients;
    //   // this.sortedData = el.clients.slice();
    //
    //   // this._authClientService.setFilterCarMark(
    //   //   this.dataSource.data.filter((el) => el.car_mark));
    //   //
    //   // this._authClientService.setFilterCarModel(
    //   //   this.dataSource.data.filter((el) => el.car_model));
    // }))
    this.carsOwnersList$ = this._store.pipe(select(getCarsOwnersListSelector));
    this.carsOwnersList$.subscribe((el) => {
      this.dataSource.data = el?.clients;
      this.sortedData = el?.clients?.slice();

      this._authClientService.setFilterCarMark(
        this.dataSource.data.filter((el) => el.car_mark));

      this._authClientService.setFilterCarModel(
        this.dataSource.data.filter((el) => el.car_model));
    })

    this._store.dispatch(getCarsOwnersListAction())

    this.clientsListSub$.add( this._authClientService.currentSearchValue$.subscribe((value) => {
      this.searchFilter(value);
    }))

    this.clientsListSub$.add(this._authClientService.currentCarMarkFilterValue$.subscribe((value) => {
      this.searchFilter(value);
    }))

    this.clientsListSub$.add( this._authClientService.currentCarModelFilterValue$.subscribe((value) => {
      this.searchFilter(value);
    }))

    this._authClientService.hasLoanClients$.subscribe((value) => {
      if(value) {
       this.dataSource.data = this.dataSource.data.filter((el: { position: string; }) => el.position)
      } else {
        this.carsOwnersList$.subscribe((el) => {
          this.dataSource.data = el?.clients;
        })
      }
    });

    this._authClientService.hasCaskoClients$.subscribe((value) => {
      if(value) {
        this.dataSource.data = this.dataSource.data.filter((el: { pts: string; }) => el.pts)
      } else {
        this.carsOwnersList$.subscribe((el) => {
          this.dataSource.data = el?.clients;
        })
      }
    });

    this._authClientService.hasOsagoClients$.subscribe((value) => {
      if(value) {
        this.dataSource.data = this.dataSource.data.filter((el: { pts: string; }) => el.pts)
      } else {

        this.carsOwnersList$.subscribe((el) => {
          this.dataSource.data = el?.clients;
        })
      }
    });

  }

  public ngAfterViewInit() {
    setTimeout(() => (this.dataSource.paginator = this.paginator));
    setTimeout(() => (this.dataSource.sort = this.sort));
    this.paginator._intl.itemsPerPageLabel = 'Показывать';
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  public searchFilter(searchValue: string) {
    this.dataSource.filter = searchValue.trim().toLowerCase();
  }

  public selectedClient(client: any) {
    const client_id = client.client_id;
    this._store.dispatch(setSelectedClientIdAction({ selectedClientId: client_id }));
    const id$ = this._store.pipe(select(getSelectedClientIdSelector))
      id$.subscribe((el) => {
      console.log(el);
    })
    // this._authClientService.sc$.subscribe({
    //   next: (v) => console.log(`observerA: ${v}`),
    // });
    // this._authClientService.sc$.next(client_id);
    this.carsOwnersList$.subscribe((el) => {
      const selectedClients = el.clients?.filter((client: any) => client.client_id == client_id);
      // this._authClientService.selectedClient$.next(selectedClients);
    })
    this._persistenceService.set('clientId', client_id);
    if (this._persistenceService.getClientId() === client_id) {
      this._router.navigateByUrl(
        `/${routingPathEnum.MainPage}/${routingPathEnum.LoanCalculationPage}/${routingPathEnum.CarInfo}`
      );
    }

    // this.clientsListSub$.add(
    //   this._authClientService.getClient({ clientId: client_id }).subscribe((el) => {
    //     if (this._persistenceService.getClientId() === client_id) {
    //       this._router.navigateByUrl(
    //         `/${routingPathEnum.MainPage}/${routingPathEnum.LoanCalculationPage}/${routingPathEnum.CarInfo}`
    //       );
    //     }
    //   })
    // );
  }

  public getTableData() {
    return this.dataSource.data;
  }

  ngOnDestroy(): void {
    // this.clientsListSub$.unsubscribe();
  }
}
