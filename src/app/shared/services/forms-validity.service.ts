import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FormsValidityService {
  public formsValidity$: BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor() {}
}
