// import { Injectable } from '@angular/core';
// import {
//   Router,
//   Resolve,
//   RouterStateSnapshot,
//   ActivatedRouteSnapshot,
// } from '@angular/router';

// import { Observable } from 'rxjs';

// import { CurrentBrokerInterface } from '../models/interfaces/current-broker.interface';

// @Injectable({
//   providedIn: 'root',
// })
// export class BrokersAuthResolver implements Resolve<CurrentBrokerInterface> {

//   resolve(
//     route: ActivatedRouteSnapshot,
//     state: RouterStateSnapshot
//   ): Observable<CurrentBrokerInterface> {
//     return this._brokerAuthService.register({
//       broker: {
//         email: '',
//         password: '',
//       },
//     });
//   }
// }
