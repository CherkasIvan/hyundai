import {RegisterRequestInterface} from '../../types/registerRequest.interface';
import {CurrentBrokerInterface} from '../../store/types/currentBroker.interface';
import {AppStateInterface} from 'src/app/pages/shared/types/appState.interface';
import {Component, OnInit} from '@angular/core';
import {UntypedFormGroup, UntypedFormBuilder, Validators} from '@angular/forms';

import {select, Store} from '@ngrx/store';
import {Observable} from 'rxjs';

import {authBrokerAction} from '../../store/broker-auth.action';
import {
  isSubmittingSelector,
  validationErrorsSelector,
} from '../../store/broker-auth.selectors';
import {BackendErrorsInterface} from 'src/app/pages/shared/types/backendErrors.interface';

@Component({
  selector: 'mc-broker-auth-page',
  templateUrl: './broker-auth-page.component.html',
  styleUrls: ['./broker-auth-page.component.scss'],
})
export class BrokerAuthPageComponent implements OnInit {
  public registrationForm!: UntypedFormGroup;
  public isSubmitting$?: Observable<boolean>;
  public backandErrors$!: Observable<BackendErrorsInterface | null>;
  public checkboxSucces = false;

  constructor(private fb: UntypedFormBuilder, private store: Store) {}

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
    this.store.dispatch(authBrokerAction({request}));
  }
}
