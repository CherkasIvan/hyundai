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

  public carMark$ = new BehaviorSubject<any>('');
  public clientCarMark$ = this.carMark$.asObservable();

  public carMarkFilterValue$ = new BehaviorSubject<string>('');
  public currentCarMarkFilterValue$ = this.carMarkFilterValue$.asObservable();

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

  public setFilterParams(params: any) {
    this.carMark$.next(params);
  }

  public filterCarsMark(params: any) {
    this.carMarkFilterValue$.next(params);
  }
}
