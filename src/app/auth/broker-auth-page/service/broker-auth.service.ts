import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { map, Observable } from 'rxjs';

import { CurrentBrokerInterface } from '../models/interfaces/current-broker.interface';
import { BrokerRegisterRequestInterface } from '../models/interfaces/broker-register-request.interface';

import { environment } from '../../../../environments/environment';

@Injectable()
export class BrokerAuthService {
  constructor(private _http: HttpClient) {}

  public register(
    data: BrokerRegisterRequestInterface
  ): Observable<CurrentBrokerInterface> {
    const httpHeaders: HttpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    const url = environment.apiUrl + '/legalUserAuthentication';

    return this._http
      .post<CurrentBrokerInterface>(url, data, { headers: httpHeaders })
      .pipe(map((response: CurrentBrokerInterface) => response));
  }
}
