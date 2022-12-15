import {RegisterRequestInterface} from './../../types/registerRequest.interface';
import {CurrentUserInterface} from '../../../../pages/shared/types/currentUser.interface';
import {AppStateInterface} from 'src/app/pages/shared/types/appState.interface';
import {Component, OnInit} from '@angular/core';
import {UntypedFormGroup, UntypedFormBuilder, Validators} from '@angular/forms';

import {select, Store} from '@ngrx/store';
import {Observable} from 'rxjs';

import {registerAction} from '../../store/auth.action';
import {
  isSubmittingSelector,
  validationErrorsSelector,
} from '../../store/auth.selectors';
import {BackendErrorsInterface} from 'src/app/pages/shared/types/backendErrors.interface';
import {AuthService} from 'src/app/core/auth/service/auth.service';

@Component({
  selector: 'mc-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
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
    this.store.dispatch(registerAction({request}));
  }
}
