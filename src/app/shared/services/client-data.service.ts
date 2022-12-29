import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable, tap } from 'rxjs';

import { environment } from 'src/environments/environment';
import { ClientCarInterface } from '../models/interfaces/clientCar.interface';

@Injectable({ providedIn: 'root' })
export class ClientDataService {
  public clientCarsData$: BehaviorSubject<ClientCarInterface> =
    new BehaviorSubject({
      client_id: '',
      car_id: '',
      vin: '',
      car_mark: '',
      car_model: '',
      car_year: '',
      engine_capacity: '',
      transmission: '',
      car_price: '',
      pts_issue_year: '',
      car_body_type: '',
      car_telematic: '',
      car_telematic_type: '',
      time_from: '',
      time_to: '',
    });

  constructor(private http: HttpClient) {}

  public getClientCars(client_id: string): Observable<ClientCarInterface[]> {
    const httpHeaders: HttpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    const url = environment.apiUrl + '/legalUserAuthentication';

    return this.http
      .post<ClientCarInterface[]>(url, client_id, { headers: httpHeaders })
      .pipe(
        map((response: ClientCarInterface[]) =>
          response.filter((car) => car.vin)
        ),
        tap((response: ClientCarInterface[]) => {
          this.clientCarsData$.next(response[0]);
          console.log(this.clientCarsData$.value);
        })
      );
  }
}
