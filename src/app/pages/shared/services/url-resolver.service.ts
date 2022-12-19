import {Injectable} from '@angular/core';

import {ActivatedRouteSnapshot, Resolve, Router} from '@angular/router';

import {EMPTY, Observable, of, catchError, map, take} from 'rxjs';
import {BrokerAuthService} from 'src/app/core/broker-auth/service/broker-auth.service';

@Injectable()
export class UrlResolverService implements Resolve<any | null> {
  //Написать ИНТЕРФЕЙС!
  constructor(
    private readonly brokerAuthService: BrokerAuthService,
    private readonly router: Router
  ) {}

  resolve(
    route: ActivatedRouteSnapshot
  ): Observable<any | null> | Observable<never> {
    // const id = route.paramMap.get('id');
    // const post =  this.brokerAuthService.register(id).toPromise();
    // console.log("THE POST IS: ", post);
    return EMPTY;
  }
}
