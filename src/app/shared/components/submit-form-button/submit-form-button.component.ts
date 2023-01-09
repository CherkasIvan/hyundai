import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup } from '@angular/forms';
import { FormsValidityService } from '../../services/forms-validity.service';
import { take } from 'rxjs';

@Component({
  selector: 'tes-submit-form-button',
  templateUrl: './submit-form-button.component.html',
  styleUrls: ['./submit-form-button.component.scss'],
})
export class SubmitFormButtonComponent implements OnInit {
  @Input() public formValues!: FormGroup;
  @Input() public isDisable!: boolean;
  @Input() public buttonText!: string;

  constructor(
    private _router: Router,
    private _formsValidityService: FormsValidityService
  ) {}

  public sendFormValues(form: FormGroup) {
    console.log(form.value);
    console.log(form.valid);
    this._formsValidityService.formsValidity$.next(true);
  }

  ngOnInit(): void {}
}
