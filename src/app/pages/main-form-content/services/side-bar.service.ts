import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable()
export class SideBarService {
  public initIndex$: BehaviorSubject<number> = new BehaviorSubject(0);

  public sideBarPercantage$: BehaviorSubject<number> = new BehaviorSubject(0);

  public setIndex(arr: any): Observable<any> {
    arr.forEach((el: { path: any }, index: number) => {
      this._router.url.includes(el.path)
        ? this.initIndex$.next(index)
        : this.initIndex$.value;
      this.sideBarPercantage$.next(
        Math.round(100 / arr.length) * this.initIndex$.value
      );
    });
    return this.sideBarPercantage$;
  }

  constructor(private _router: Router) {}
}
