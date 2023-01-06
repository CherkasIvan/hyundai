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

import { Subscription, forkJoin } from 'rxjs';

import { PersistenceService } from '../../../../shared/services/persistence.service';
import { GetUsersService } from '../../services/get-users.service';

import { routingPathEnum } from '../../../../shared/consts/routing-path-enum';

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
    private _getUsers: GetUsersService,
    private _getUserService: GetUsersService,
    private _persistenceService: PersistenceService,
    private _router: Router
  ) {}

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

    this.clientsListSub$.add(
      this._getUsers.getClients().subscribe((el) => {
      this.dataSource.data = el.clients;
      this.sortedData = el.clients.slice();

      this._getUserService.setFilterCarMark(
        this.dataSource.data.filter((el) => el.car_mark));

      this._getUserService.setFilterCarModel(
        this.dataSource.data.filter((el) => el.car_model));
    }))

    this.clientsListSub$.add( this._getUserService.currentSearchValue$.subscribe((value) => {
      this.searchFilter(value);
    }))

    this.clientsListSub$.add(this._getUserService.currentCarMarkFilterValue$.subscribe((value) => {
      this.searchFilter(value);
    }))

    this.clientsListSub$.add( this._getUserService.currentCarModelFilterValue$.subscribe((value) => {
      this.searchFilter(value);
    }))

    this._getUserService.hasLoanClients$.subscribe((value) => {
      if(value) {
       this.dataSource.data = this.dataSource.data.filter((el: { pts: string; }) => el.pts)
      } else {
        this._getUsers.getClients().subscribe((el) => {
          this.dataSource.data = el.clients;
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
    this._persistenceService.set('clientId', client_id);
    this.clientsListSub$.add(
      this._getUserService.getClients({ clientId: client_id }).subscribe(() => {
        if (this._persistenceService.getClientId() === client_id) {
          this._router.navigateByUrl(
            `/${routingPathEnum.MainPage}/${routingPathEnum.LoanCalculationPage}/${routingPathEnum.CarInfo}`
          );
        }
      })
    );
  }

  public getTableData() {
    return this.dataSource.data;
  }

  ngOnDestroy(): void {
    this.clientsListSub$.unsubscribe();
  }
}
