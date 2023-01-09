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

import { Subscription } from 'rxjs';

import { PersistenceService } from '../../../../shared/services/persistence.service';

import { routingPathEnum } from '../../../../shared/consts/routing-path-enum';
import { ClientAuthService } from '../../services/client-auth.service';

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
    'last_name',
    'car_brand',
    'car_model',
    'vin',
    'kasko',
    'osago',
    'loan_products',
    'phone',
  ];

  constructor(
    private _clientAuthService: ClientAuthService,
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
        case 'last_name':
          return this.compare(a.first_name, b.first_name, isAsc);
        case 'car_brand':
          return this.compare(a.car_brand, b.car_brand, isAsc);
        case 'car_model':
          return this.compare(a.car_model, b.car_model, isAsc);
        case 'vin':
          return this.compare(a.carbs, b.carbs, isAsc);
        case 'kasko':
          return this.compare(a.kasko, b.kasko, isAsc);
        case 'osago':
          return this.compare(a.osago, b.osago, isAsc);
        case 'loan_products':
          return this.compare(a.loan_products, b.loan_products, isAsc);
        case 'phone':
          return this.compare(a.phone, b.phone, isAsc);
        default:
          return 0;
      }
    });
  }

  public ngOnInit(): void {
    this.clientsListSub$.add(
      this._clientAuthService.getClients().subscribe((el) => {
        this.dataSource.data = el.clients;
        this.sortedData = el.clients.slice();

        this._clientAuthService.setFilterCarMark(
          this.dataSource.data.filter((el) => el.car_mark)
        );

        this._clientAuthService.setFilterCarModel(
          this.dataSource.data.filter((el) => el.car_model)
        );
      })
    );

    this.clientsListSub$.add(
      this._clientAuthService.currentSearchValue$.subscribe((value) => {
        this.searchFilter(value);
      })
    );

    this.clientsListSub$.add(
      this._clientAuthService.currentCarMarkFilterValue$.subscribe((value) => {
        this.searchFilter(value);
      })
    );

    this.clientsListSub$.add(
      this._clientAuthService.currentCarModelFilterValue$.subscribe((value) => {
        this.searchFilter(value);
      })
    );

    this._clientAuthService.hasLoanClients$.subscribe((value) => {
      if (value) {
        this.dataSource.data = this.dataSource.data.filter(
          (el: { pts: string }) => el.pts
        );
      } else {
        this._clientAuthService.getClients().subscribe((el) => {
          this.dataSource.data = el.clients;
        });
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
      this._clientAuthService
        .getClients({ clientId: client_id })
        .subscribe(() => {
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
