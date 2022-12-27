import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { BehaviorSubject, map, Observable, tap } from 'rxjs';

import { RegisterRequestInterface } from '../types/registerRequest.interface';
import { CurrentUserInterface } from '../types/currentUser.interface';
import { AuthResponseInterface } from '../types/authResponse.interface';

import { environment } from '../../../../environments/environment';
import { userDataInterface } from '../types/userData.interface';

@Injectable()
export class UserAuthService {
  public userData$: BehaviorSubject<userDataInterface> = new BehaviorSubject({
    clientId: '',
    status: '',
    testCode: '',
  });

  constructor(private _http: HttpClient) {}

  public userRegister(
    data: RegisterRequestInterface
  ): Observable<CurrentUserInterface> {
    const httpHeaders: HttpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    const url = environment.apiUrl + '/registerClient';
    return this._http
      .post<AuthResponseInterface>(url, data, { headers: httpHeaders })
      .pipe(
        map((response: any) => response),
        tap((response: any) => {
          this.userData$.next(response);
        })
      );
  }

  public userAuth(
    data: RegisterRequestInterface
  ): Observable<CurrentUserInterface> {
    const httpHeaders: HttpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    const url = environment.apiUrl + '/confirmClientRegistration';
    return this._http
      .post<AuthResponseInterface>(url, data, { headers: httpHeaders })
      .pipe(map((response: any) => response));
  }
}
