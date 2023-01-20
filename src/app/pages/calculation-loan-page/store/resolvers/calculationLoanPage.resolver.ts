import { Injectable } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { ClientsDataService } from '../../../../shared/services/clients-data.service';

@Injectable({ providedIn: "root" })

export class CalculationLoanPageResolver implements Resolve<any>{
  constructor(private _clientDataService: ClientsDataService,
              private _activatedRoute: ActivatedRoute) {}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any | Observable<any> | Promise<any> {
    let clientId!: any
    this._activatedRoute.queryParams.subscribe((el) => {
      clientId = el;
    })
    return this._clientDataService.getClients({clientId: clientId });
  }
}