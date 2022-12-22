import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  selector: 'app-insurance-polices-modal-options',
  templateUrl: './insurance-polices-modal-options.component.html',
  styleUrls: ['./insurance-polices-modal-options.component.scss'],
})
export class InsurancePolicesModalOptionsComponent implements OnInit {
  @Input() public specialOptions!: any;

  public formSpecialOptions = new FormGroup({});
  public model = {};
  public options: FormlyFormOptions = {};
  public fields: FormlyFieldConfig[] = [];
  constructor() {}

  public submitForm(model: any): void {
    console.log(model);
  }

  ngOnInit(): void {
    this.specialOptions.forEach((option: any) => {
      if ('options' in option) {
        this.fields.push({
          key: option.key,
          type: option.type,
          props: {
            label: option.label,
            placeholder: option.placeholder,
            options: option.options,
          },
        });
      } else
        this.fields.push({
          key: option.key,
          type: option.type,
          props: {
            label: option.label,
            placeholder: option.placeholder,
          },
        });
    });
  }
}
