import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { inputClearerClearTextAction } from '../../store/actions/input-clearer.action';

@Component({
  selector: 'app-input-clearer',
  templateUrl: './input-clearer.component.html',
  styleUrls: ['./input-clearer.component.scss'],
})
export class InputClearerComponent implements OnInit {
  public initialValue: string = '';
  public inputClearedForm!: FormGroup;

  @Output() public componentValue: EventEmitter<string> =
    new EventEmitter<string>();

  constructor(private _fb: FormBuilder, private readonly _store: Store) {}

  public clearInputValue(): void {
    this._store.dispatch(inputClearerClearTextAction());
    this.inputClearedForm.reset();
  }

  public initializeForm(): void {
    this.inputClearedForm = this._fb.group({
      inputClearer: [this.initialValue, Validators.required],
    });
  }

  public ngOnInit(): void {
    this.initializeForm();
    this.inputClearedForm?.get('inputClearer')?.valueChanges.subscribe((el) => {
      this.componentValue.emit(el);
    });
  }
}
