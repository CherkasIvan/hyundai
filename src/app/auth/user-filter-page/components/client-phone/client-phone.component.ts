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
  selector: 'tes-client-phone',
  templateUrl: './client-phone.component.html',
  styleUrls: ['./client-phone.component.scss'],
})
export class ClientPhoneComponent implements OnInit, OnDestroy {
  public clientPhoneForm!: FormGroup;

  public clientPhoneSub$: Subscription = new Subscription();

  @Output() nextStepOutput = new EventEmitter<number>();

  private initializeForms(): void {
    this.clientPhoneForm = this._fb.group({
      phone: ['', Validators.required],
      // test: true,
    });
  }

  constructor(
    private _fb: FormBuilder,
    private _clientAuthService: ClientAuthService
  ) {}

  public nexStep(value: number) {
    this.nextStepOutput.emit(value);
  }

  public sendClientData(formData: FormGroup) {
    this.clientPhoneSub$.add(
      this._clientAuthService.userRegister(formData.value).subscribe((el) => {
        if (el) {
          this.nexStep(1);
        }
      })
    );
  }

  ngOnInit(): void {
    this.initializeForms();
  }

  ngOnDestroy(): void {
    this.clientPhoneSub$.unsubscribe();
  }
}
