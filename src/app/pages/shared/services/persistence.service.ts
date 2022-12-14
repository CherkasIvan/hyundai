import {Injectable} from '@angular/core';

@Injectable()
export class PersistenceService {
  set(key: string, data: any): void {
    try {
      localStorage.setItem(key, JSON.stringify(data));
    } catch (e) {
      console.error('Error saving to localStorage', e);
    }
  }

  get(key: string): any {
    try {
      return localStorage.getItem(JSON.parse(key));
    } catch (e) {
      console.error('Error getting data from LocalStorage', e);
      return null;
    }
  }

  public getToken(): string {
    const accessToken = JSON.parse(localStorage.getItem('accessToken')!);
    return accessToken;
  }

  // public isAuthenticated(): boolean {
  //   // get the token
  //   const token = this.getToken();
  //   // return a boolean reflecting
  //   // whether or not the token is expired
  //   return tokenNotExpired(null, token);
  // }

  constructor() {}
}
