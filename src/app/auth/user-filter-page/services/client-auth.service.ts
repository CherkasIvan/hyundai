import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { BehaviorSubject, map, Observable, tap } from 'rxjs';

import { environment } from '../../../../environments/environment';

import { CurrentClientInterface } from '../models/interfaces/current-client..interface';
import { ClientAuthResponseInterface } from '../models/interfaces/client-auth-response.interface';

@Injectable()
export class ClientAuthService {
  public allClients$: BehaviorSubject<any> = new BehaviorSubject([]);

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

  public hasCasko$ = new BehaviorSubject<boolean>(false);
  public hasCaskoClients$ = this.hasCasko$.asObservable();

  public hasOsago$ = new BehaviorSubject<boolean>(false);
  public hasOsagoClients$ = this.hasOsago$.asObservable();

  public userData$: BehaviorSubject<CurrentClientInterface> =
    new BehaviorSubject({
      clientId: '',
      status: '',
      testCode: '',
    });

  constructor(private _http: HttpClient) {}

  public userRegister(
    data: ClientAuthResponseInterface
  ): Observable<CurrentClientInterface> {
    const httpHeaders: HttpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    const url = environment.apiUrl + '/registerClient';
    return this._http
      .post<ClientAuthResponseInterface>(url, data, { headers: httpHeaders })
      .pipe(
        map((response: any) => response),
        tap((response: CurrentClientInterface) => {
          this.userData$.next(response);
        })
      );
  }

  public userAuth(
    data: ClientAuthResponseInterface
  ): Observable<CurrentClientInterface> {
    const httpHeaders: HttpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    const url = environment.apiUrl + '/confirmClientRegistration';
    return this._http
      .post<ClientAuthResponseInterface>(url, data, { headers: httpHeaders })
      .pipe(map((response: any) => response));
  }

  public getClients(body = {}): Observable<any> {
    const httpHeaders: HttpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    const url = environment.apiUrl + '/getCarsWithOwners';

    return this._http.post<any>(url, body, { headers: httpHeaders }).pipe(
      tap((response: any) => {
        this.allClients$.next(response.clients);
        // console.log(response);
      })
    );
  }

  public searchClient(searchValue: any) {
    this.searchValue$.next(searchValue);
  }

  public setFilterCarMark(params: any) {
    this.carMark$.next(params);
  }

  public filterCarsMark(params: any) {
    this.carMarkFilterValue$.next(params);
  }

  public setFilterCarModel(params: any) {
    this.carModel$.next(params);
  }

  public filterCarsModel(params: any) {
    this.carModelFilterValue$.next(params);
  }

  public hasLoanFilter(params: boolean) {
    this.hasLoan$.next(params);
  }

  public hasCaskoFilter(params: boolean) {
    this.hasCasko$.next(params);
  }

  public hasOsagoFilter(params: boolean) {
    this.hasOsago$.next(params);
  }
}
