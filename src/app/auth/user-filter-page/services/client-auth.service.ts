import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { BehaviorSubject, map, Observable, take, tap } from 'rxjs';

import { environment } from '../../../../environments/environment';

import { CurrentUserInterface } from '../../user-auth-page/models/interfaces/current-user.interface';
import { UserAuthResponseInterface } from '../../user-auth-page/models/interfaces/user-auth-response.interface';
import { UserRegisterRequestType } from '../../user-auth-page/models/types/user-register-request.type';

@Injectable()
export class ClientAuthService {
  public allClients$: BehaviorSubject<any> = new BehaviorSubject([]);

  public selectedClient$ = new BehaviorSubject<any>({
    "link_id": "b9bfbd0c-1316-40f2-9a5a-1a42728cd1df",
    "dealer_id": "d3d2baa9-8dd4-451f-874f-94308ced8946",
    "client_id": "ccdd203c-1b58-423b-9457-b97db70ec2a0",
    "time_from": "1672311569036",
    "phone": "+79126693753",
    "first_name": "Авдей",
    "last_name": "Бугаев",
    "patronymic": "Владиславович",
    "email": "adasdas@asdasd.ru",
    "gender": 1,
    "birthdate": "2000-07-12T00:00:00.000Z",
    "passport_number": "65 11 111111",
    "passport_issued_at": "2006-07-12T00:00:00.000Z",
    "passport_division_code": "661-001",
    "residence_address": "Г. Екатеринбург, ул. Зуброва, д. 75, кв. 58",
    "marital_status": 1,
    "kids_amount": 2,
    "personal_data_policy_confirmation": true,
    "created_at": null,
    "active": 1,
    "car_id": "dd55f116-cd8a-4e52-9b0c-3538f05d5977",
    "vin": "X7L4SRC9B53513910",
    "car_mark": "Hyundai",
    "car_model": "Tucson 2.0D",
    "car_year": 2022,
    "horse_power": "185",
    "transmission": "auto",
    "car_price": 2000000,
    "pts": "77OM 123456",
    "car_body_type": null,
    "car_telematic": true,
    "car_telematic_type": "Misos LIGHT",
    "time_to": null,
    "status": 1
})
  public selectedClientValue$ = this.selectedClient$.asObservable();

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

  public userData$: BehaviorSubject<CurrentUserInterface> = new BehaviorSubject(
    {
      clientId: '',
      status: '',
      testCode: '',
    }
  );

  constructor(private _http: HttpClient) {}

  public userRegister(
    data: UserRegisterRequestType
  ): Observable<CurrentUserInterface> {
    const httpHeaders: HttpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    const url = environment.apiUrl + '/registerClient';
    return this._http
      .post<UserRegisterRequestType>(url, data, { headers: httpHeaders })
      .pipe(
        map((response: any) => response),
        tap((response: CurrentUserInterface) => {
          this.userData$.next(response);
        })
      );
  }

  public userAuth(
    data: UserRegisterRequestType
  ): Observable<CurrentUserInterface> {
    const httpHeaders: HttpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    const url = environment.apiUrl + '/confirmClientRegistration';
    return this._http
      .post<UserAuthResponseInterface>(url, data, { headers: httpHeaders })
      .pipe(map((response: any) => response));
  }

  public getClients(body = {}): Observable<any> {
    const httpHeaders: HttpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    const url = environment.apiUrl + '/getCarsWithOwners';

    if(!Object.values(body).length) {
      return this._http.post<any>(url, body, { headers: httpHeaders }).pipe(
        tap((response: any) => {
          this.allClients$.next(response.clients);
          console.log(response);
        })
      );
    } else {
       return this._http.post<any>(url, body, { headers: httpHeaders }).pipe(
      tap((response: any) => {
        this.selectedClient$.next(response.clients);
        console.log(response);
      })
    );
    }
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

  public hasLoanFilter (params: boolean) {
    this.hasLoan$.next(params);
  }

  public hasCaskoFilter (params: boolean) {
    this.hasCasko$.next(params);
  }

  public hasOsagoFilter (params: boolean) {
    this.hasOsago$.next(params);
  }
}
