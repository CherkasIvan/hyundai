import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  selector: 'app-insurance-polices-modal-card',
  templateUrl: './insurance-polices-modal-card.component.html',
  styleUrls: ['./insurance-polices-modal-card.component.scss'],
})
export class InsurancePolicesModalCardComponent implements OnInit {
  @Input() public insuranceCompany!: any;
  @Output() formValueReturnEvent = new EventEmitter<any>();
  @Output() specialOptionsEvent = new EventEmitter<any>();

  public formModal = new FormGroup({});
  public model: Object = {};
  public options: FormlyFormOptions = {};
  public fields: FormlyFieldConfig[] = [
    {
      className: 'card-content__form--checkbox',
      key: 'Checkbox',
      type: 'checkbox',
      templateOptions: {
        label: this.insuranceCompany,
      },
    },
  ];

  public sendFormValues(value: any) {
    this.formValueReturnEvent.emit(value);
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

  ngOnInit(): void {
    // this.setLabel();
  }
}
