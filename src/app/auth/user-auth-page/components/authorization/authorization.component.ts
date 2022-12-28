import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { select, Store } from '@ngrx/store';
import {
  isSubmittingAuthSelector,
  validationAuthErrorsSelector,
} from '../../store/selectors/userAuth.selectors';

import { Observable } from 'rxjs';

import { BackendErrorsInterface } from '../../../../shared/types/backendErrors.interface';
import { userAuthAction } from '../../store/actions/userAuth.action';
import { UserAuthService } from '../../services/user-auth.service';
import { UserRegisterRequestInterface } from '../../types/userRegisterRequest.interface';

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
    private readonly _store: Store,
    private _fb: FormBuilder,
    private _userAuthService: UserAuthService
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
    this.isSubmitting$ = this._store.pipe(select(isSubmittingAuthSelector));
    this.backandErrors$ = this._store.pipe(
      select(validationAuthErrorsSelector)
    );
    this._userAuthService.userData$.subscribe((value) => {
      this.authForm.patchValue({
        clientId: value.clientId,
        code: value.testCode,
      });
    });
  }

  public onSubmitAuth(): void {
    const request: UserRegisterRequestInterface = this.authForm.value;
    this._store.dispatch(userAuthAction({ request }));
  }
}
