import {map, Observable, tap} from 'rxjs';
import {Injectable} from '@angular/core';
import {RegisterRequestInterface} from '../types/registerRequest.interface';
import {CurrentUserInterface} from '../../shared/types/currentUser.interface';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from 'src/environments/environment';
import {AuthResponseInterface} from '../types/authResponse.interface';

@Injectable()
export class AuthService {
  constructor(private http: HttpClient) {}

  public register(
    data: RegisterRequestInterface
  ): Observable<CurrentUserInterface> {
    const httpHeaders: HttpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    const url = environment.apiUrl + '/registerClient';
    return this.http
      .post<AuthResponseInterface>(url, data, {headers: httpHeaders})
      .pipe(
        map((response: any) => response),
        tap((response: any) => console.log(response))
      );
  }

  public confirmClient(
    data: RegisterRequestInterface
  ): Observable<CurrentUserInterface> {
    const httpHeaders: HttpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    const url = environment.apiUrl + '/confirmClientRegistration';
    return this.http
      .post<AuthResponseInterface>(url, data, {headers: httpHeaders})
      .pipe(
        map((response: any) => response),
        tap((response: any) => console.log(response))
      );
  }
}

// https://d5dcisg3i9afo2k55397.apigw.yandexcloud.net/confirmClientRegistration
