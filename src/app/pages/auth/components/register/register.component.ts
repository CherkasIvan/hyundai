import { RegisterRequestInterface } from './../../types/registerRequest.interface';
import { CurrentUserInterface } from './../../../shared/types/currentUser.interface';
import { AppStateInterface } from 'src/app/pages/shared/types/appState.interface';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { registerAction } from '../../store/actions/register.action';
import { isSubmittingSelector, validationErrorsSelector } from '../../store/selectors';
import { AuthService } from '../../services/auth.service';
import { BackendErrorsInterface } from 'src/app/pages/shared/types/backendErrors.interface';

@Component({
  selector: 'mc-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  public form!: FormGroup;
  public isSubmitting$?: Observable<boolean>
  public backandErrors$!: Observable<BackendErrorsInterface | null>

  constructor(private fb: FormBuilder, private store: Store, private authService: AuthService) { }

  public ngOnInit(): void {
    this.initializeForm()
    this.initializeValues()
  }

  public initializeValues(): void {
    this.isSubmitting$ = this.store.pipe(select(isSubmittingSelector))
    this.backandErrors$ = this.store.pipe(select(validationErrorsSelector))
    this.isSubmitting$.subscribe(el => console.log(el))
    this.backandErrors$.subscribe(el => console.log(el))
  }

  public initializeForm(): void {
    this.form = this.fb.group({
      phone: ['', Validators.required],
      code: ['', Validators.required],
    })
  }

  public onSubmit(): void {
    const request: RegisterRequestInterface = {
      user: this.form.value
    }
    this.store.dispatch(registerAction({ request }));
    console.log(this.form.valid)
    console.log(this.form.value)
  }
}
