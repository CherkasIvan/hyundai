import {Injectable} from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import {select, Store} from '@ngrx/store';
import {Observable, tap} from 'rxjs';
import {AuthStateInterface} from '../types/authState.interface';

// @Injectable()
// export class AuthGuard implements CanActivate {
//   constructor(
//     private store: Store<AuthStateInterface>,
//     private route: Router
//   ) {}
//   canActivate(
//     route: ActivatedRouteSnapshot,
//     state: RouterStateSnapshot
//   ): Observable<boolean> {
//     return this.store.pipe(
//       select(isLoggedIn),
//       tap((isLogged) => {
//         if (!isLogged) {
//           this.route.navigateByUrl('/foo');
//         }
//       })
//     );
//   }
// }
