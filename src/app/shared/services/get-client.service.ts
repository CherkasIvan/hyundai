import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, tap, filter, Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { Clients } from "../models/interfaces/clients.interface";

@Injectable({ providedIn: 'root' })
export class GetClientsDataService {
    constructor(private http: HttpClient) {}

    public getClientData(): Observable<Clients> {
        const httpHeaders: HttpHeaders = new HttpHeaders({
            'Content-Type': 'application/json',
          });
      const url = environment.apiUrl + '/getClients';


      return this.http
      .post<Clients>(url,{}, { headers: httpHeaders })
      .pipe(
        map((response: any) => response.clients),
        filter((some:any)=>some )
      );
   }
}