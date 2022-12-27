import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { map, Observable, tap } from 'rxjs';

import { RegisterRequestInterface } from '../types/registerRequest.interface';
import { CurrentUserInterface } from '../types/currentUser.interface';
import { AuthResponseInterface } from '../types/authResponse.interface';

import { environment } from '../../../../environments/environment';

@Injectable()
export class UserAuthService {
  constructor(private http: HttpClient) {}

  public userRegister(
    data: RegisterRequestInterface
  ): Observable<CurrentUserInterface> {
    const httpHeaders: HttpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    const url = environment.apiUrl + '/registerClient';
    return this.http
      .post<AuthResponseInterface>(url, data, { headers: httpHeaders })
      .pipe(
        map((response: any) => response),
        tap((response: any) => console.log(response))
      );
  }

  public userAuth(
    data: RegisterRequestInterface
  ): Observable<CurrentUserInterface> {
    const httpHeaders: HttpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    const url = environment.apiUrl + '/confirmClientRegistration';
    return this.http
      .post<AuthResponseInterface>(url, data, { headers: httpHeaders })
      .pipe(
        map((response: any) => response),
        tap((response: any) => console.log(response))
      );
  }
}
