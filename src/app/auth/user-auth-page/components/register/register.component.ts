import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, Validators, FormGroup } from '@angular/forms';

import { MatTooltip } from '@angular/material/tooltip';

import { select, Store } from '@ngrx/store';
import { userRegisterAction } from '../../store/userRegister.action';
import {
  isSubmittingSelector,
  validationErrorsSelector,
} from '../../store/userSelectors';

import { Observable } from 'rxjs';

import { RegisterRequestInterface } from '../../types/registerRequest.interface';
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

  constructor(private _fb: UntypedFormBuilder, private _store: Store) {}

  public ngOnInit(): void {
    this.initializeRegistrationForm();
    this.initializeValues();
  }

  public initializeValues(): void {
    this.isSubmitting$ = this._store.pipe(select(isSubmittingSelector));
    this.backandErrors$ = this._store.pipe(select(validationErrorsSelector));
  }

  public initializeRegistrationForm(): void {
    this.registrationForm = this._fb.group({
      phone: ['', Validators.required],
      test: true,
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
    this._store.dispatch(userRegisterAction({ request }));
  }
}
