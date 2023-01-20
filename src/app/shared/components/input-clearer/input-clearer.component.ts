import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'tes-input-clearer',
  templateUrl: './input-clearer.component.html',
  styleUrls: ['./input-clearer.component.scss'],
})
export class InputClearerComponent implements OnInit, OnChanges {
  public initialValue: string = '';
  public inputClearedForm!: FormGroup;

  @Input()
  public formControlTitle!: string;

  @Input()
  public showClearer: boolean = false;

  @Input()
  public fullName!: string;

  @Output()
  componentValue: EventEmitter<string> = new EventEmitter<string>();

  constructor(private _fb: FormBuilder) {}

  public clearInputValue(): void {
    this.inputClearedForm.reset();
  }

  ngOnInit(): void {
    this.initializeForm();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(changes?.['fullName'].currentValue) {
      this.initialValue = changes?.['fullName'].currentValue;
      this.inputClearedForm?.get('inputClearer')?.valueChanges.subscribe((el) => {
        this.componentValue.emit(el);
      });
    }
  }

  public initializeForm(): void {
    this.inputClearedForm = this._fb.group({
      inputClearer: [this.fullName, Validators.required],
    });
  }
}
