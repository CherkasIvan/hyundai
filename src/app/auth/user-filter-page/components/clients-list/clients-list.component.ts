import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';

import { MatPaginator } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

import { LiveAnnouncer } from '@angular/cdk/a11y';

import { GetUsersService } from '../../services/get-users.service';

@Component({
  selector: 'app-clients-list',
  templateUrl: './clients-list.component.html',
  styleUrls: ['./clients-list.component.scss'],
})
export class ClientsListComponent implements OnInit, AfterViewInit {
  public dataSource: MatTableDataSource<any> = new MatTableDataSource();

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort!: MatSort;

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
    private _liveAnnouncer: LiveAnnouncer
  ) {}

  public announceSortChange(sortState: Sort) {
    console.log(sortState);
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }

  public ngOnInit(): void {
    this._getUsers.getClients().subscribe((el) => {
      this.dataSource.data = el.clients;
    });
  }

  public ngAfterViewInit() {
    setTimeout(() => (this.dataSource.paginator = this.paginator));
    setTimeout(() => (this.dataSource.sort = this.sort));

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
