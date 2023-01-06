import {
  ChangeDetectionStrategy,
  Component,
  forwardRef,
  Input,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'tes-input-checkbox',
  templateUrl: './tes-input-checkbox.component.html',
  styleUrls: ['./tes-input-checkbox.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => TesInputCheckboxComponent),
      multi: true,
    },
  ],
})
export class TesInputCheckboxComponent implements ControlValueAccessor {
  @Input() public label!: string;
  @Input() public small!: boolean;

  public value: boolean = false;

  public onChange: Function = () => {};
  public onTouch: Function = () => {};

  public registerOnChange(fn: Function): void {
    this.onChange = fn;
  }

  public registerOnTouched(fn: Function): void {
    this.onTouch = fn;
  }

  public writeValue(value: boolean) {
    this.value = value;
  }

  public onModelChange(e: boolean) {
    // Step 5a: bind the changes to the local value
    this.value = e;

    // Step 5b: Handle what should happen on the outside, if something changes on the inside
    this.onChange(e);
  }
}
