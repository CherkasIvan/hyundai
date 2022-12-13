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
    const httpHeaders: HttpHeaders = new HttpHeaders();
    httpHeaders.set('Content-Type', 'application/json');
    httpHeaders.set('Accept', '*/*');
    httpHeaders.set('Access-Control-Allow-Origin', '*');

    const url = environment.apiUrl + '/legalUserRegistration';
    return this.http
      .post<AuthResponseInterface>(url, data, {headers: httpHeaders})
      .pipe(map((response: AuthResponseInterface) => response.user));
  }
}
