import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { select, Store } from '@ngrx/store';
import {
  isSubmittingSelector,
  validationErrorsSelector,
} from '../../store/userSelectors';

import { Observable } from 'rxjs';

import { BackendErrorsInterface } from '../../../../shared/types/backendErrors.interface';
import { userAuthAction } from '../../store/userRegister.action';
import { RegisterRequestInterface } from '../../types/registerRequest.interface';
import { UserAuthService } from '../../services/user-auth.service';

@Component({
  selector: 'app-authorization',
  templateUrl: './authorization.component.html',
  styleUrls: ['./authorization.component.scss'],
})
export class AuthorizationComponent implements OnInit {
  public authForm!: FormGroup;

  public isSubmitting$?: Observable<boolean>;
  public backandErrors$!: Observable<BackendErrorsInterface | null>;

  constructor(
    private _store: Store,
    private _fb: FormBuilder,
    private userAuthService: UserAuthService
  ) {}

  public ngOnInit(): void {
    this.initializeAuthForm();
    this.initializeValues();
  }

  public initializeAuthForm(): void {
    this.authForm = this._fb.group({
      clientId: [null, Validators.required],
      code: [null, Validators.required],
    });
  }

  public initializeValues(): void {
    this.isSubmitting$ = this._store.pipe(select(isSubmittingSelector));
    this.backandErrors$ = this._store.pipe(select(validationErrorsSelector));
    this.userAuthService.userData$.subscribe((value) => {
      this.authForm.patchValue({
        clientId: value.clientId,
        code: value.testCode,
      });
    });
  }

  public onSubmitAuth(): void {
    console.log(this.authForm.value);
    const request: RegisterRequestInterface = this.authForm.value;
    this._store.dispatch(userAuthAction({ request }));
  }
}
