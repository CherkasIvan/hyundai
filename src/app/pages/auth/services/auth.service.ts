import {map, Observable, tap} from 'rxjs';
import {Injectable} from '@angular/core';
import {RegisterRequestInterface} from '../types/registerRequest.interface';
import {CurrentUserInterface} from '../../../pages/auth/types/currentUser.interface';
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
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjJmZTlhYjY5LWZjMjAtNDg5ZC1hZGI4LTk2NGE4ZmNjNWUzZCIsImVtYWlsIjoibWU3ODdAeWFuZGV4LnJ1IiwiaWF0IjoxNjcxMDEwODM3LCJleHAiOjE3MDI1NDY4Mzd9.eLZVmzI3vGJ6g4rbHAWKioE-ODirm4z6uaecOSEL9hA',
    });

    const url = environment.apiUrl + '/registerClient';
    return this.http
      .post<AuthResponseInterface>(url, data, {headers: httpHeaders})
      .pipe(
        map((response: any) => response),
        tap((response: any) => console.log(response))
      );
  }
}
