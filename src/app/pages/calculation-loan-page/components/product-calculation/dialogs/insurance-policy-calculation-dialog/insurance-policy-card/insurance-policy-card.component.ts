import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { InsurancePolicyCardInterface } from 'src/app/shared/models/interfaces/insurance-policy-card.interface';

@Component({
  selector: 'insurance-policy-card',
  templateUrl: './insurance-policy-card.component.html',
  styleUrls: ['./insurance-policy-card.component.scss'],
})
export class InsurancePolicyCardComponent implements OnInit {
  @Input() public insuranceCompanies!: InsurancePolicyCardInterface[];

  @Output() public hideOptions: EventEmitter<boolean> =
    new EventEmitter<boolean>();

  public isHidden: boolean = true;

  public changeHiddenValue(): void {
    this.isHidden = !this.isHidden;
  }

  public sendIsHiddenValues(): void {
    this.changeHiddenValue();
    this.hideOptions.emit(this.isHidden);
  }

  constructor() {}

  // public setLabel(): void {
  //   this.insuranceCompany.insurances.forEach((elementIns: any) => {
  //     console.log(elementIns.label);

  //     this.fields.forEach((element: any) => {
  //       element.templateOptions.label = elementIns.label;
  //       console.log(element.templateOptions.label);
  //     });
  //   });
  // }

  ngOnInit(): void {}
}
