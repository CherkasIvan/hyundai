import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { Observable } from 'rxjs';

import { select, Store } from '@ngrx/store';
import { authBrokerAction } from '../../store/broker-auth.action';
import {
  isSubmittingSelector,
  validationErrorsSelector,
} from '../../store/broker-auth.selectors';

import { RegisterRequestInterface } from '../../types/registerRequest.interface';
import { BackendErrorsInterface } from '../../../../shared/types/backendErrors.interface';

@Component({
  selector: 'app-broker-auth-page',
  templateUrl: './broker-auth-page.component.html',
  styleUrls: ['./broker-auth-page.component.scss'],
})
export class BrokerAuthPageComponent implements OnInit {
  public registrationForm!: FormGroup;
  public isSubmitting$?: Observable<boolean>;
  public backandErrors$!: Observable<BackendErrorsInterface | null>;
  public checkboxSucces = false;

  constructor(private fb: FormBuilder, private store: Store) {}

  public ngOnInit(): void {
    this.initializeForm();
    this.initializeValues();
  }

  public initializeValues(): void {
    this.isSubmitting$ = this.store.pipe(select(isSubmittingSelector));
    this.backandErrors$ = this.store.pipe(select(validationErrorsSelector));
  }

  public initializeForm(): void {
    this.registrationForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  public openTooltip(tooltip: any): void {
    tooltip.show();
    setTimeout(() => {
      tooltip.hide();
    }, 1500);
  }

  public onSubmit(): void {
    const request: RegisterRequestInterface = this.registrationForm.value;
    this.store.dispatch(authBrokerAction({ request }));
  }
}
