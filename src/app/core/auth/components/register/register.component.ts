import {RegisterRequestInterface} from './../../types/registerRequest.interface';
import {CurrentUserInterface} from '../../../../pages/shared/types/currentUser.interface';
import {AppStateInterface} from 'src/app/pages/shared/types/appState.interface';
import {Component, OnInit} from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';

import {select, Store} from '@ngrx/store';
import {Observable} from 'rxjs';

import {registerAction} from '../../store/auth.action';
import {
  isSubmittingSelector,
  validationErrorsSelector,
} from '../../store/auth.selectors';
import {BackendErrorsInterface} from 'src/app/pages/shared/types/backendErrors.interface';

@Component({
  selector: 'mc-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
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

  public onSubmit(): void {
    const request: RegisterRequestInterface = this.registrationForm.value;
    this.store.dispatch(registerAction({request}));
  }
}
