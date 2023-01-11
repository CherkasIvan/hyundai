import { Component, EventEmitter, Input, Output } from '@angular/core';

import { InsurancePolicyCardInterface } from 'src/app/shared/models/interfaces/insurance-policy-card.interface';

@Component({
  selector: 'insurance-policy-card',
  templateUrl: './insurance-policy-card.component.html',
  styleUrls: ['./insurance-policy-card.component.scss'],
})
export class InsurancePolicyCardComponent {
  @Input() public insurancePolicies!: InsurancePolicyCardInterface[] | any;

  @Output() public showOptions: EventEmitter<any> =
    new EventEmitter<any>();

  public onShowOptions(options: any): void {
    this.showOptions.emit(options);
  }
}
