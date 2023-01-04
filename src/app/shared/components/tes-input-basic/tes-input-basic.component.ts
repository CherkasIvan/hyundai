import { ChangeDetectionStrategy, Component, forwardRef, Input } from '@angular/core';
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
  @Input() label!: string;
  @Input() placeholder!: string;
  @Input() clearButton!: boolean;
  @Input() style: 'filled' | 'underline' = 'filled';

  public value!: string;

  onChange: any = () => {};
  onTouch: any = () => {};

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }

  public writeValue(value: string) {
    this.value = value;
  }

  onModelChange(e: any) {
    // bind the changes to the local value
    this.value = e.target.value;

    // handle what should happen on the outside, if something changes on the inside
    this.onChange(e.target.value);
  }
}
