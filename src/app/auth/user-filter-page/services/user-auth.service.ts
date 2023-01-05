import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { BehaviorSubject, map, Observable, tap } from 'rxjs';

import { environment } from '../../../../environments/environment';

import { CurrentUserInterface } from '../../user-auth-page/models/interfaces/current-user.interface';
import { UserAuthResponseInterface } from '../../user-auth-page/models/interfaces/user-auth-response.interface';
import { UserRegisterRequestType } from '../../user-auth-page/models/types/user-register-request.type';

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
          console.log(response);
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
}
