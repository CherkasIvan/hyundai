import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-input-clearer',
  templateUrl: './input-clearer.component.html',
  styleUrls: ['./input-clearer.component.scss']
})
export class InputClearerComponent implements OnInit {
  public initialValue = '';
  public inputClearedForm!: FormGroup;

  @Output()
  componentValue:EventEmitter<string> = new EventEmitter<string>()

  constructor( private _fb: FormBuilder) { }

  public clearInputValue() {
  this.inputClearedForm.reset();
  }

  public changeValue(value:string){
  }

  ngOnInit(): void {
    this.initializeForm();
    this.inputClearedForm?.get("inputClearer")?.valueChanges.subscribe(el=>{
    this.componentValue.emit(el);
    })
  }

  public initializeForm(): void {
    this.inputClearedForm = this._fb.group({
      inputClearer: [this.initialValue, Validators.required],
    });
  }
}
