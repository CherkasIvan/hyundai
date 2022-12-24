import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-insurance-polices-modal-card',
  templateUrl: './insurance-polices-modal-card.component.html',
  styleUrls: ['./insurance-polices-modal-card.component.scss'],
})
export class InsurancePolicesModalCardComponent implements OnInit {
  public isHiden: boolean = true;

  @Input() public insuranceCompany!: any;
  @Output() formValueReturnEvent = new EventEmitter<any>();
  @Output() hideOptions: any = new EventEmitter();

  public changeHidenValue() {
    this.isHiden = !this.isHiden;
  }

  public sendIsHidenValues(value: any) {
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
