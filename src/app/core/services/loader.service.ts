import { Injectable } from '@angular/core';

@Injectable()
export class LoaderService {
  private _loading: boolean = false;

  constructor() {}

  public setLoading(loading: boolean) {
    this._loading = loading;
  }

  public getLoading(): boolean {
    return this._loading;
  }
}
