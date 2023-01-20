import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Injectable } from '@angular/core';

import { Observable, tap } from 'rxjs';

import { environment } from '../../../environments/environment';

@Injectable({ providedIn: 'root' })
export class ClientsDataService {

  constructor(private _http: HttpClient) {}

    public getClients(body: any): Observable<any> {
        const httpHeaders: HttpHeaders = new HttpHeaders({
            'Content-Type': 'application/json',
        });
        const url = environment.apiUrl + '/getCarsWithOwners';

        return this._http.post<any>(url, body, { headers: httpHeaders })
    }

    public createCar(body: any): Observable<any> {
      const httpHeaders: HttpHeaders = new HttpHeaders({
        'Content-Type': 'application/json',
      });
      const url = environment.apiUrl + '/createCar';

      return this._http.post<any>(url, body, { headers: httpHeaders })
    }

    public editCar(body: any): Observable<any> {
      const httpHeaders: HttpHeaders = new HttpHeaders({
        'Content-Type': 'application/json',
      });
      const url = environment.apiUrl + '/editCarDetails';

      return this._http.post<any>(url, body, { headers: httpHeaders })
    }

    public connectCarToClient(body: any): Observable<any> {
      const httpHeaders: HttpHeaders = new HttpHeaders({
        'Content-Type': 'application/json',
      });
      const url = environment.apiUrl + '/connectCarToClient';

      return this._http.post<any>(url, body, { headers: httpHeaders })
    }
}
