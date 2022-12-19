import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {FormlyFormOptions, FormlyFieldConfig} from '@ngx-formly/core';

@Component({
  selector: 'mc-insurance-polices-modal-card',
  templateUrl: './insurance-polices-modal-card.component.html',
  styleUrls: ['./insurance-polices-modal-card.component.scss'],
})
export class InsurancePolicesModalCardComponent implements OnInit {
  @Input() public insuranceCompany!: any;

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
      // validation: {
      //   messages: {
      //     pattern: 'Please accept the terms',
      //   },
      // },
    },
  ];

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
