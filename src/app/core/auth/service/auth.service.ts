import {map, Observable, tap} from 'rxjs';
import {Injectable} from '@angular/core';
import {RegisterRequestInterface} from '../types/registerRequest.interface';
import {CurrentUserInterface} from '../../../pages/shared/types/currentUser.interface';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from 'src/environments/environment';
import {AuthResponseInterface} from '../types/authResponse.interface';

@Injectable()
export class AuthService {
  constructor(private http: HttpClient) {}

  public register(data: any): Observable<any> {
    const httpHeaders: HttpHeaders = new HttpHeaders();
    httpHeaders.set('Content-Type', 'application/json');

    const url = environment.apiUrl + '/legalUserAuthentication';
    return this.http
      .post<any>(url, JSON.stringify(data), {
        headers: httpHeaders,
      })
      .pipe(
        tap((response: any) => console.log(response)),
        map((response: any) => response.user)
      );
  }
}
