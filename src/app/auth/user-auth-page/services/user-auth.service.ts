import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { BehaviorSubject, map, Observable, tap } from 'rxjs';

import { environment } from '../../../../environments/environment';

import { UserRegisterRequestInterface } from '../models/userRegisterRequest.interface';
import { CurrentUserInterface } from '../models/currentUser.interface';
import { UserAuthResponseInterface } from '../models/userAuthResponse.interface';

@Injectable()
export class UserAuthService {
  public userData$: BehaviorSubject<CurrentUserInterface> = new BehaviorSubject(
    {
      clientId: '',
      status: '',
      testCode: '',
    }
  );

  constructor(private _http: HttpClient) {}

  public userRegister(
    data: UserRegisterRequestInterface
  ): Observable<CurrentUserInterface> {
    const httpHeaders: HttpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    const url = environment.apiUrl + '/registerClient';
    return this._http
      .post<UserRegisterRequestInterface>(url, data, { headers: httpHeaders })
      .pipe(
        map((response: any) => response),
        tap((response: CurrentUserInterface) => {
          this.userData$.next(response);
        })
      );
  }

  public userAuth(
    data: UserRegisterRequestInterface
  ): Observable<CurrentUserInterface> {
    const httpHeaders: HttpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    const url = environment.apiUrl + '/confirmClientRegistration';
    return this._http
      .post<UserAuthResponseInterface>(url, data, { headers: httpHeaders })
      .pipe(map((response: any) => response));
  }
}
