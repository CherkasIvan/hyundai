import { Component, OnInit } from '@angular/core';
import {
  UntypedFormGroup,
  UntypedFormBuilder,
  Validators,
} from '@angular/forms';
import { MatTooltip } from '@angular/material/tooltip';

import { Store, select } from '@ngrx/store';

import { Observable } from 'rxjs';

import { authBrokerAction } from '../../store/broker-auth.action';
import {
  isBrokerSubmittingSelector,
  validationBrokerErrorsSelector,
} from '../../store/broker-auth.selectors';

import { BackendErrorsType } from '../../../../shared/models/types/backendErrors.type';

import { BrokerRegisterRequestInterface } from '../../models/interfaces/broker-register-request.interface';

@Component({
  selector: 'app-auth-email-form',
  templateUrl: './auth-email-form.component.html',
  styleUrls: ['./auth-email-form.component.scss'],
})
export class AuthEmailFormComponent implements OnInit {
  public registrationForm!: UntypedFormGroup;
  public isBrokerSubmittingByEmail$?: Observable<boolean>;
  public backandErrors$!: Observable<BackendErrorsType | null>;
  public checkboxSucces: boolean = false;

  constructor(
    private _fb: UntypedFormBuilder,
    private readonly _store: Store
  ) {}

  public ngOnInit(): void {
    this.initializeForm();
    this.initializeValues();
  }

  public initializeValues(): void {
    this.isBrokerSubmittingByEmail$ = this._store.pipe(
      select(isBrokerSubmittingSelector)
    );
    this.backandErrors$ = this._store.pipe(
      select(validationBrokerErrorsSelector)
    );
  }

  public initializeForm(): void {
    this.registrationForm = this._fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  public openTooltip(tooltip: MatTooltip): void {
    tooltip.show();
    setTimeout(() => {
      tooltip.hide();
    }, 1500);
  }

  public onSubmit(): void {
    const request: BrokerRegisterRequestInterface = this.registrationForm.value;
    this._store.dispatch(authBrokerAction({ request }));
  }
}
