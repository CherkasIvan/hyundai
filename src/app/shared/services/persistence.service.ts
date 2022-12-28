import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class PersistenceService {
  set(key: string, data: string): void {
    try {
      localStorage.setItem(key, JSON.stringify(data));
    } catch (e) {
      console.error('Error saving to localStorage', e);
    }
  }

  get(key: string): string | null {
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

  constructor() {}
}
