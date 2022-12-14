import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable, map, tap} from 'rxjs';
import {environment} from 'src/environments/environment';
import {AuthResponseInterface} from '../../auth/types/authResponse.interface';
import {RegisterRequestInterface} from '../../auth/types/registerRequest.interface';
import {CurrentUserInterface} from '../types/currentUser.interface';

@Injectable()
export class TokenService {
  constructor(private http: HttpClient) {}

  public refreshToken(payload: any): Observable<CurrentUserInterface> {
    // YНАПИСАТЬ ИНТЕРФЕСЫ для пэйлод
    const httpHeaders: HttpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    const url = environment.apiUrl + '/legalUserCheckToken';
    return this.http
      .post<AuthResponseInterface>(url, payload, {headers: httpHeaders})
      .pipe(
        map((response: any) => response),
        tap((response: any) => console.log(response))
      );
  }
}
