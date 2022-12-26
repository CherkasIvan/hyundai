import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { map, Observable, tap } from 'rxjs';

import { CurrentBrokerInterface } from '../store/types/currentBroker.interface';

import { RegisterRequestInterface } from '../types/registerRequest.interface';
import { BrokerAuthResponseInterface } from '../store/types/brokerAuthResponse.interface';

import { environment } from 'src/environments/environment';

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
      .post<BrokerAuthResponseInterface>(url, data, { headers: httpHeaders })
      .pipe(map((response: any) => response));
  }
}
