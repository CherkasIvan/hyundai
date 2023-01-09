import {
  Component,
  EventEmitter,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Subscription } from 'rxjs';
import { ClientAuthService } from '../../services/client-auth.service';

@Component({
  selector: 'tes-client-verification-code',
  templateUrl: './client-verification-code.component.html',
  styleUrls: ['./client-verification-code.component.scss'],
})
export class ClientVerificationCodeComponent implements OnInit, OnDestroy {
  public verificationClientForm!: FormGroup;

  public clientVerificationCodeSub$: Subscription = new Subscription();

  @Output() nextStepOutput = new EventEmitter<number>();

  constructor(
    private _fb: FormBuilder,
    private _clientAuthService: ClientAuthService
  ) {}

  public nexStep(value: number) {
    this.nextStepOutput.emit(value);
  }

  public sendClientData(formData: FormGroup) {
    this.clientVerificationCodeSub$.add(
      this._clientAuthService.userAuth(formData.value).subscribe((el) => {
        if (el) {
          this.nexStep(2);
        }
      })
    );
  }

  private initializeValues(): void {
    this.clientVerificationCodeSub$.add(
      this._clientAuthService.userData$.subscribe((value) => {
        this.verificationClientForm.patchValue({
          clientId: value.clientId,
          code: value.testCode,
        });
      })
    );
  }

  private initializeForms(): void {
    this.verificationClientForm = this._fb.group({
      code: ['', Validators.required],
      clientId: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.initializeForms();
    this.initializeValues();
  }

  ngOnDestroy(): void {
    this.clientVerificationCodeSub$.unsubscribe();
  }
}
