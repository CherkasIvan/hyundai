import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, Validators, FormGroup } from '@angular/forms';

import { MatTooltip } from '@angular/material/tooltip';

import { Store, select } from '@ngrx/store';
import {
  isBrokerSubmittingSelector,
  validationBrokerErrorsSelector,
} from '../../store/broker-auth.selectors';
import { authBrokerAction } from '../../store/broker-auth.action';

import { Observable } from 'rxjs';

import { BackendErrorsInterface } from '../../../../shared/types/backendErrors.interface';

import { BrokerRegisterRequestInterface } from '../../store/types/brokerRegisterRequest.interface';

@Component({
  selector: 'app-auth-broker-id-form',
  templateUrl: './auth-broker-id-form.component.html',
  styleUrls: ['./auth-broker-id-form.component.scss'],
})
export class AuthBrokerIdFormComponent implements OnInit {
  public registrationForm!: FormGroup;
  public isBrokerSubmittingById$?: Observable<boolean>;
  public backandErrors$!: Observable<BackendErrorsInterface | null>;
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
    this.isBrokerSubmittingById$ = this._store.pipe(
      select(isBrokerSubmittingSelector)
    );
    this.backandErrors$ = this._store.pipe(
      select(validationBrokerErrorsSelector)
    );
  }

  public initializeForm(): void {
    this.registrationForm = this._fb.group({
      name: ['', Validators.required],
      id: ['', Validators.required],
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
