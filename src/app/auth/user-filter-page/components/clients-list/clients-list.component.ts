import { LiveAnnouncer } from '@angular/cdk/a11y';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

import { BehaviorSubject } from 'rxjs';
import { GetUsersService } from '../../services/get-users.service';

@Component({
  selector: 'app-clients-list',
  templateUrl: './clients-list.component.html',
  styleUrls: ['./clients-list.component.scss'],
})
export class ClientsListComponent implements OnInit, AfterViewInit {
  public dataSource: MatTableDataSource<any> = new MatTableDataSource();

  @ViewChild('paginator') paginator!: MatPaginator;
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
  constructor(
    private _getUsers: GetUsersService,
    private _liveAnnouncer: LiveAnnouncer
  ) {}

  public announceSortChange(sortState: any) {
    // This example uses English messages. If your application supports
    // multiple language, you would internationalize these strings.
    // Furthermore, you can customize the message to add additional
    // details about the values being sorted.
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }

  public ngOnInit(): void {
    this._getUsers.getClients().subscribe((el) => {
      this.allClints$.next(el.clients);
      this.dataSource.data = el.clients;
    });
  }

  public ngAfterViewInit() {
    setTimeout(() => (this.dataSource.paginator = this.paginator));
    console.log(this.paginator);
    console.log(this.dataSource);
    setTimeout(() => (this.dataSource.sort = this.sort));

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
