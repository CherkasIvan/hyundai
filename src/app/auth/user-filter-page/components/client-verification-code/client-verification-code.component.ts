import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserAuthService } from '../../services/user-auth.service';

@Component({
  selector: 'tes-client-verification-code',
  templateUrl: './client-verification-code.component.html',
  styleUrls: ['./client-verification-code.component.scss'],
})
export class ClientVerificationCodeComponent implements OnInit {
  public verificationClientForm!: FormGroup;

  @Output() nextStepOutput = new EventEmitter<number>();

  constructor(
    private _fb: FormBuilder,
    private _userServics: UserAuthService
  ) {}

  public nexStep(value: number) {
    this.nextStepOutput.emit(value);
  }

  public sendClientData(formData: FormGroup) {
    this._userServics.userAuth(formData.value).subscribe((el) => {
      if (el) {
        this.nexStep(2);
      }
    });
  }

  private initializeValues(): void {
    this._userServics.userData$.subscribe((value) => {
      this.verificationClientForm.patchValue({
        clientId: value.clientId,
        code: value.testCode,
      });
    });
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
}
