import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-submit-form-button',
  templateUrl: './submit-form-button.component.html',
  styleUrls: ['./submit-form-button.component.scss'],
})
export class SubmitFormButtonComponent implements OnInit {
  @Input() formValues!: FormGroup;
  @Input() isDisable!: boolean;
  @Input() buttonText!: string;
  constructor() {}

  public sendFormValues(form: FormGroup) {
    console.log(form);
  }

  ngOnInit(): void {}
}
