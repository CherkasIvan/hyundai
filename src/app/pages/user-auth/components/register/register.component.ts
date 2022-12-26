import { RegisterRequestInterface } from './../../types/registerRequest.interface';
import { Component, OnInit } from '@angular/core';
import {
  UntypedFormGroup,
  UntypedFormBuilder,
  Validators,
} from '@angular/forms';

import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { userAuthAction } from '../../store/userRegister.action';
import {
  isSubmittingSelector,
  validationErrorsSelector,
<<<<<<< HEAD:src/app/pages/auth/components/register/register.component.ts
} from '../../store/selectors';
import {BackendErrorsInterface} from 'src/app/pages/shared/types/backendErrors.interface';
=======
} from '../../store/userSelectors';
import { BackendErrorsInterface } from '../../../../shared/types/backendErrors.interface';
import { MatTooltip } from '@angular/material/tooltip';
>>>>>>> ed7839c66f655bbe579ef1b941cbf57cf4ea4a9f:src/app/pages/user-auth/components/register/register.component.ts

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  public registrationForm!: UntypedFormGroup;
  public isSubmitting$?: Observable<boolean>;
  public backandErrors$!: Observable<BackendErrorsInterface | null>;

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
      phone: ['', Validators.required],
      // secret_key: ['', Validators.required],
    });
  }

  public openTooltip(tooltip: MatTooltip): void {
    tooltip.show();
    setTimeout(() => {
      tooltip.hide();
    }, 1500);
  }

  public onSubmit(): void {
    const request: RegisterRequestInterface = this.registrationForm.value;
<<<<<<< HEAD:src/app/pages/auth/components/register/register.component.ts
    this.store.dispatch(registerAction({request}));
=======
    this.store.dispatch(userAuthAction({ request }));
>>>>>>> ed7839c66f655bbe579ef1b941cbf57cf4ea4a9f:src/app/pages/user-auth/components/register/register.component.ts
  }
}
