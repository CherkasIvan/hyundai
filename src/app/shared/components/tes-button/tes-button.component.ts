import { Component, Input } from '@angular/core';

@Component({
  selector: 'tes-button',
  templateUrl: './tes-button.component.html',
  styleUrls: ['./tes-button.component.scss']
})
export class TesButtonComponent {
  @Input() title!: string;
  @Input() color!: 'primary' | 'secondary';
  @Input() icon!: 'clear' | 'add';
}
