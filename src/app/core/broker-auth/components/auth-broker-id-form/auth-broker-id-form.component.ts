import {Component, OnInit} from '@angular/core';
import {UntypedFormGroup, UntypedFormBuilder, Validators} from '@angular/forms';
import {Store, select} from '@ngrx/store';
import {Observable} from 'rxjs';
import {BackendErrorsInterface} from 'src/app/pages/shared/types/backendErrors.interface';
import {authBrokerAction} from '../../store/broker-auth.action';
import {
  isSubmittingSelector,
  validationErrorsSelector,
} from '../../store/broker-auth.selectors';
import {RegisterRequestInterface} from '../../types/registerRequest.interface';

@Component({
  selector: 'mc-auth-broker-id-form',
  templateUrl: './auth-broker-id-form.component.html',
  styleUrls: ['./auth-broker-id-form.component.scss'],
})
export class AuthBrokerIdFormComponent implements OnInit {
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
      name: ['', Validators.required],
      id: ['', Validators.required],
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
