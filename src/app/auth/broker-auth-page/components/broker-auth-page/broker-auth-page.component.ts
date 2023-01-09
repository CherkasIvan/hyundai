import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { MatTooltip } from '@angular/material/tooltip';

import { select, Store } from '@ngrx/store';
import { authBrokerAction } from '../../store/broker-auth.action';
import {
  isBrokerSubmittingSelector,
  validationBrokerErrorsSelector,
} from '../../store/broker-auth.selectors';

import { Observable } from 'rxjs';

import { BackendErrorsType } from '../../../../shared/models/types/backendErrors.type';
import { BrokerRegisterRequestInterface } from '../../models/interfaces/broker-register-request.interface';

@Component({
  selector: 'tes-broker-auth-page',
  templateUrl: './broker-auth-page.component.html',
  styleUrls: ['./broker-auth-page.component.scss'],
})
export class BrokerAuthPageComponent implements OnInit {
  public registrationForm!: FormGroup;
  public isSubmitting$?: Observable<boolean>;
  public backendErrors$!: Observable<BackendErrorsType | null>;
  public checkboxSuccess: boolean = false;

  constructor(private _fb: FormBuilder, private readonly _store: Store) {}

  public ngOnInit(): void {
    this.initializeForm();
    this.initializeValues();
  }

  public initializeValues(): void {
    this.isSubmitting$ = this._store.pipe(select(isBrokerSubmittingSelector));
    this.backendErrors$ = this._store.pipe(
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
