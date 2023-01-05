import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserAuthService } from '../../services/user-auth.service';

@Component({
  selector: 'tes-client-phone',
  templateUrl: './client-phone.component.html',
  styleUrls: ['./client-phone.component.scss'],
})
export class ClientPhoneComponent implements OnInit {
  public clientPhoneForm!: FormGroup;

  @Output() nextStepOutput = new EventEmitter<number>();

  private initializeForms(): void {
    this.clientPhoneForm = this._fb.group({
      phone: ['', Validators.required],
      test: true,
    });
  }

  constructor(
    private _fb: FormBuilder,
    private _userServics: UserAuthService
  ) {}

  public nexStep(value: number) {
    this.nextStepOutput.emit(value);
  }

  public sendClientData(formData: FormGroup) {
    this._userServics.userRegister(formData.value).subscribe((el) => {
      if (el) {
        this.nexStep(1);
      }
    });
  }

  ngOnInit(): void {
    this.initializeForms();
  }
}
