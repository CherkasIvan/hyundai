import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { map, Observable } from 'rxjs';

import { CurrentBrokerInterface } from '../store/types/currentBroker.interface';

import { RegisterRequestInterface } from '../types/registerRequest.interface';

import { environment } from '../../../../environments/environment';

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
      .post<CurrentBrokerInterface>(url, data, { headers: httpHeaders })
      .pipe(map((response: CurrentBrokerInterface) => response));
  }
}
