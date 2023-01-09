import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { select, Store } from '@ngrx/store';
import {
  isSubmittingAuthSelector,
  validationAuthErrorsSelector,
} from '../../store/selectors/userAuth.selectors';
import { userAuthAction } from '../../store/actions/userAuth.action';

import { Observable, Subscription } from 'rxjs';

import { ClientAuthService } from '../../../../auth/user-filter-page/services/client-auth.service';

import { BackendErrorsType } from '../../../../shared/models/types/backendErrors.type';
import { UserRegisterRequestType } from '../../models/types/user-register-request.type';

@Component({
  selector: 'tes-authorization',
  templateUrl: './authorization.component.html',
  styleUrls: ['./authorization.component.scss'],
})
export class AuthorizationComponent implements OnInit, OnDestroy {
  public authForm!: FormGroup;

  public isSubmitting$?: Observable<boolean>;
  public backendErrors$!: Observable<BackendErrorsType | null>;

  public authClientSub$: Subscription = new Subscription();

  constructor(
    private readonly _store: Store,
    private _fb: FormBuilder,
    private _clientAuthService: ClientAuthService
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
    this.backendErrors$ = this._store.pipe(
      select(validationAuthErrorsSelector)
    );
    this.authClientSub$.add(
      this._clientAuthService.userData$.subscribe((value) => {
        this.authForm.patchValue({
          clientId: value.clientId,
          code: value.testCode,
        });
      })
    );
  }

  public onSubmitAuth(): void {
    const request: UserRegisterRequestType = this.authForm.value;
    this._store.dispatch(userAuthAction({ request }));
  }

  public ngOnDestroy(): void {
    this.authClientSub$.unsubscribe();
  }
}
