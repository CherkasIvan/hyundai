import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'tes-submit-form-button',
  templateUrl: './submit-form-button.component.html',
  styleUrls: ['./submit-form-button.component.scss'],
})
export class SubmitFormButtonComponent implements OnInit {
  @Input() formValues!: FormGroup;
  @Input() isDisable!: boolean;
  @Input() buttonText!: string;

  constructor(private _router: Router) {}

  public sendFormValues(form: FormGroup) {
    console.log(form);
    console.log(this._router.url);
  }

  ngOnInit(): void {}
}
