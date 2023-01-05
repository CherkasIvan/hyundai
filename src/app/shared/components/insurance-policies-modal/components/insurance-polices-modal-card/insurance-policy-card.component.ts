import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { InsurancePolicyCardInterface } from '../../../../models/interfaces/insurance-policy-card.interface';

@Component({
  selector: 'insurance-policy-card',
  templateUrl: './insurance-policy-card.component.html',
  styleUrls: ['./insurance-policy-card.component.scss'],
})
export class InsurancePolicyCardComponent implements OnInit {
  public isHiden: boolean = true;

  @Input() public insuranceCompany!: InsurancePolicyCardInterface;
  @Output() public hideOptions: EventEmitter<boolean> =
    new EventEmitter<boolean>();

  public changeHidenValue(): void {
    this.isHiden = !this.isHiden;
  }

  public sendIsHidenValues(): void {
    this.changeHidenValue();
    this.hideOptions.emit(this.isHiden);
  }

  constructor() {}

  // public setLabel(): void {
  //   this.insuranceCompany.insurences.forEach((elementIns: any) => {
  //     console.log(elementIns.label);

  //     this.fields.forEach((element: any) => {
  //       element.templateOptions.label = elementIns.label;
  //       console.log(element.templateOptions.label);
  //     });
  //   });
  // }

  ngOnInit(): void {}
}
