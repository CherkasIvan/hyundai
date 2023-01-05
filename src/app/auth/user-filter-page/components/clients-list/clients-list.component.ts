import { AfterViewChecked, AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';

import { MatPaginator } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

import { GetUsersService } from '../../services/get-users.service';

@Component({
  selector: 'app-clients-list',
  templateUrl: './clients-list.component.html',
  styleUrls: ['./clients-list.component.scss'],
})
export class ClientsListComponent implements OnInit, AfterViewInit, AfterViewChecked{
  public dataSource: MatTableDataSource<any> = new MatTableDataSource();
  public sortedData: any;
  public client_profile: any;

  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
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
    private _getUserService: GetUsersService
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
          return this.compare(a.name, b.name, isAsc);
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
    this._getUsers.getClients().subscribe((el) => {
      this.dataSource.data = el.clients;
      // this.dataSource.data = el.clients.filter((el: { first_name: any; }) => el.first_name);
      this.sortedData = el.clients.slice();
      this._getUserService.setFilterParams(this.dataSource.data.filter((el) => el.first_name))
    });

    this._getUserService.currentSearchValue$.subscribe((value) => {
      this.searchFilter(value);

    });

    this._getUserService.currentCarMarkFilterValue$.subscribe((value) => {
      this.searchFilter(value);
    }) 
    
    
  }

  public ngAfterViewInit() {
    setTimeout(() => (this.dataSource.paginator = this.paginator));
    setTimeout(() => (this.dataSource.sort = this.sort));
    this.paginator._intl.itemsPerPageLabel = 'Показывать';
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }

   
  }

  public ngAfterViewChecked(): void {
    // console.log(this.dataSource.filteredData); 
       console.log(this.getTableData().filter((el) => el.first_name));
  }

  public searchFilter(searchValue: string) {
    this.dataSource.filter = searchValue.trim().toLowerCase();
  }

  public selectedClient(client: any) {
    const client_id = client.client_id;
    console.log(client.client_id);
    this._getUserService
      .getClients({ ids: [client_id] })
      .subscribe((value) => console.log(value));
  }

  public getTableData(){
    return this.dataSource.data;
  }
}
