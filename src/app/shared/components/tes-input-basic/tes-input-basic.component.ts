import {
  ChangeDetectionStrategy,
  Component,
  forwardRef,
  Input,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'tes-input-basic',
  templateUrl: './tes-input-basic.component.html',
  styleUrls: ['./tes-input-basic.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => TesInputBasicComponent),
      multi: true,
    },
  ],
})
export class TesInputBasicComponent implements ControlValueAccessor {
  @Input() public label!: string;
  @Input() public placeholder!: string;
  @Input() public clearButton!: boolean;
  @Input() public style: 'filled' | 'underline' = 'filled';

  @Input() public value!: string;

  public onChange: Function = () => {};
  public onTouch: Function = () => {};

  public registerOnChange(fn: Function): void {
    this.onChange = fn;
  }

  public registerOnTouched(fn: Function): void {
    this.onTouch = fn;
  }

  public writeValue(value: string) {
    this.value = value;
  }

  public onModelChange(e: Event) {
    // bind the changes to the local value
    this.value = (e.target as HTMLInputElement).value;

    // handle what should happen on the outside, if something changes on the inside
    this.onChange(this.value);
  }
}
