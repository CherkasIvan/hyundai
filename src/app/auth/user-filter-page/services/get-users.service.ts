import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { BehaviorSubject, Observable, tap } from 'rxjs';

import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class GetUsersService {
  public allClints$: BehaviorSubject<any> = new BehaviorSubject([]);

  public searchValue$ = new BehaviorSubject<string>('');
  public currentSearchValue$ = this.searchValue$.asObservable();

  public carMark$ = new BehaviorSubject<string>('');
  public clientCarMark$ = this.carMark$.asObservable();

  public carModel$ = new BehaviorSubject<string>('');
  public clientCarModel$ = this.carModel$.asObservable();

  public carMarkFilterValue$ = new BehaviorSubject<string>('');
  public currentCarMarkFilterValue$ = this.carMarkFilterValue$.asObservable();

  public carModelFilterValue$ = new BehaviorSubject<string>('');
  public currentCarModelFilterValue$ = this.carModelFilterValue$.asObservable();


  public hasLoan$ = new BehaviorSubject<boolean>(false);
  public hasLoanClients$ = this.hasLoan$.asObservable();


  constructor(private _http: HttpClient) {}

  public getClients(body = {}): Observable<any> {
    const httpHeaders: HttpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    const url = environment.apiUrl + '/getCarsWithOwners';

    return this._http.post<any>(url, body, { headers: httpHeaders }).pipe(
      tap((response: any) => {
        this.allClints$.next(response.clients);
        // console.log(response);
      })
    );
  }

  public searchClient(searchValue: any) {
    this.searchValue$.next(searchValue);
  }

  public setFilterCarMark (params: any) {
    this.carMark$.next(params);
  }

  public filterCarsMark (params: any) {
    this.carMarkFilterValue$.next(params);
  }

  public setFilterCarModel (params: any) {
    this.carModel$.next(params);
  }

  public filterCarsModel (params: any) {
    this.carModelFilterValue$.next(params);
  }

  public hasLoanFilter (params: boolean) {
    this.hasLoan$.next(params);
  }
}
