import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, Validators, FormGroup } from '@angular/forms';

import { MatTooltip } from '@angular/material/tooltip';

import { select, Store } from '@ngrx/store';
import {
  userAuthAction,
  userRegisterAction,
} from '../../store/userRegister.action';
import {
  isSubmittingSelector,
  validationErrorsSelector,
} from '../../store/userSelectors';

import { Observable } from 'rxjs';

import { RegisterRequestInterface } from './../../types/registerRequest.interface';
import { BackendErrorsInterface } from '../../../../shared/types/backendErrors.interface';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  public registrationForm!: FormGroup;
  public authForm!: FormGroup;

  public isSubmitting$?: Observable<boolean>;
  public backandErrors$!: Observable<BackendErrorsInterface | null>;

  constructor(private fb: UntypedFormBuilder, private store: Store) {}

  public ngOnInit(): void {
    this.initializeRegistrationForm();
    this.initializeAuthForm();
    this.initializeValues();
  }

  public initializeValues(): void {
    this.isSubmitting$ = this.store.pipe(select(isSubmittingSelector));
    this.backandErrors$ = this.store.pipe(select(validationErrorsSelector));
  }

  public initializeRegistrationForm(): void {
    this.registrationForm = this.fb.group({
      phone: ['', Validators.required],
      // secret_key: ['', Validators.required],
    });
  }

  public initializeAuthForm(): void {
    this.authForm = this.fb.group({
      clientId: ['', Validators.required],
      code: ['', Validators.required],
    });
  }

  public openTooltip(tooltip: MatTooltip): void {
    tooltip.show();
    setTimeout(() => {
      tooltip.hide();
    }, 1500);
  }

  public onSubmitRegistration(): void {
    const request: RegisterRequestInterface = this.registrationForm.value;
    this.store.dispatch(userRegisterAction({ request }));
  }

  public onSubmitAuth(): void {
    const request: RegisterRequestInterface = this.authForm.value;
    this.store.dispatch(userAuthAction({ request }));
  }
}
