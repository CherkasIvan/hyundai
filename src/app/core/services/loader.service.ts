import { Injectable } from '@angular/core';

@Injectable()
export class LoaderService {
  private loading: boolean = false;

  constructor() {}

  public setLoading(loading: boolean) {
    this.loading = loading;
  }

  public getLoading(): boolean {
    return this.loading;
  }
}
