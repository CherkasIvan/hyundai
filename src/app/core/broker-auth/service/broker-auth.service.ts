import {map, Observable, tap} from 'rxjs';
import {Injectable} from '@angular/core';
import {RegisterRequestInterface} from '../types/registerRequest.interface';
import {CurrentBrokerInterface} from '../store/types/currentBroker.interface';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from 'src/environments/environment';
import {AuthResponseInterface} from '../types/authResponse.interface';

@Injectable()
export class BrokerAuthService {
  constructor(private http: HttpClient) {}

  public register(
    data: RegisterRequestInterface
  ): Observable<CurrentBrokerInterface> {
    const httpHeaders: HttpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    const url = environment.apiUrl + '/legalUserAuthentication';

    return this.http
      .post<AuthResponseInterface>(url, data, {headers: httpHeaders})
      .pipe(map((response: any) => response));
  }
}