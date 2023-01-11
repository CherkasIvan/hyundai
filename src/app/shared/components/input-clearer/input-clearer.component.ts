import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ClientAuthService } from 'src/app/auth/user-filter-page/services/client-auth.service';

@Component({
  selector: 'tes-input-clearer',
  templateUrl: './input-clearer.component.html',
  styleUrls: ['./input-clearer.component.scss'],
})
export class InputClearerComponent implements OnInit {
  public initialValue: string = '';
  public inputClearedForm!: FormGroup;

  @Input()
  public formControlTitle!: string;

  @Input()
  public showClearer: boolean = false;

  @Output()
  componentValue: EventEmitter<string> = new EventEmitter<string>();

  constructor(private _fb: FormBuilder,
              private  _authClientService: ClientAuthService) {}

  public clearInputValue(): void {
    this.inputClearedForm.reset();
  }

  ngOnInit(): void {
    this.initializeForm();
    this.inputClearedForm?.get('inputClearer')?.valueChanges.subscribe((el) => {
      this.componentValue.emit(el);
    });
    this._authClientService.selectedClientValue$.subscribe((el) => {
      this.inputClearedForm.get('inputClearer')?.patchValue(`${el.first_name} ${el.last_name} ${el.patronymic}`)
    })
  }

  public initializeForm(): void {
    this.inputClearedForm = this._fb.group({
      inputClearer: [this.initialValue, Validators.required],
    });
  }
}
