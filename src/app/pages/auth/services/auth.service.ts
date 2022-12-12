import { map, Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { RegisterRequestInterface } from '../types/registerRequest.interface';
import { CurrentUserInterface } from '../../shared/types/currentUser.interface';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { AuthResponseInterface } from '../types/authResponse.interface';

@Injectable()
export class AuthService {

  constructor(private http: HttpClient) { }

  public register(data: RegisterRequestInterface): Observable<CurrentUserInterface> {
    const url = environment.apiUrl + '/legalUserRegistration'
    return this.http.post<AuthResponseInterface>(url, data).pipe(map((response: AuthResponseInterface) => response.user))
  }
}
