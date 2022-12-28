import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { ModalCardInterface } from '../../../../../shared/types/modal-card.interface';

@Component({
  selector: 'app-insurance-polices-modal-card',
  templateUrl: './insurance-polices-modal-card.component.html',
  styleUrls: ['./insurance-polices-modal-card.component.scss'],
})
export class InsurancePolicesModalCardComponent implements OnInit {
  public isHiden: boolean = true;

  @Input() public insuranceCompany!: ModalCardInterface;
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
