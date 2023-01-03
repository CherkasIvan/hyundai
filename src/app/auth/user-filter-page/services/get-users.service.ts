import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class GetUsersService {
  public allClints$: BehaviorSubject<any> = new BehaviorSubject([]);

  constructor(private _http: HttpClient) {}

  public getClients(body = {}): Observable<any> {
    const httpHeaders: HttpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    const url = environment.apiUrl + '/getClients';

    return this._http.post<any>(url, body, { headers: httpHeaders }).pipe(
      tap((response: any) => {
        this.allClints$.next(response.clients);
        console.log(response);
      })
    );
  }
}
