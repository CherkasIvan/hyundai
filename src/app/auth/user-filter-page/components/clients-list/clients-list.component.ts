import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

import { BehaviorSubject } from 'rxjs';
import { ClientDataService } from 'src/app/shared/services/client-data.service';
import { GetUsersService } from '../../services/get-users.service';

@Component({
  selector: 'app-clients-list',
  templateUrl: './clients-list.component.html',
  styleUrls: ['./clients-list.component.scss'],
})
export class ClientsListComponent implements OnInit, AfterViewInit {
  public dataSource: MatTableDataSource<any> = new MatTableDataSource();

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

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

  public allClints$: BehaviorSubject<any> = new BehaviorSubject([]);
  constructor(private _getUsers: GetUsersService,
              private clientDataService: ClientDataService) {}

  public ngOnInit(): void {
    this._getUsers.getClients().subscribe((el) => {
      this.allClints$.next(el.clients);
      this.dataSource = el.clients;
    });

    this.clientDataService.currentSearchValue$.subscribe((value) => {
      this.searchFilter(value);
    })
  }

  public ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  public searchFilter(searchValue: string) {
    this.dataSource.filter = searchValue.trim().toLowerCase();
  }
}
