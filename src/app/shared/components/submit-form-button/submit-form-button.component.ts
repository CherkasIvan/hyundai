import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup } from '@angular/forms';
import { FormsValidityService } from '../../services/forms-validity.service';

@Component({
  selector: 'tes-submit-form-button',
  templateUrl: './submit-form-button.component.html',
  styleUrls: ['./submit-form-button.component.scss'],
})
export class SubmitFormButtonComponent {
  @Input() public formValues!: FormGroup;
  @Input() public isDisable!: boolean;
  @Input() public buttonText!: string;

  @Output()
  submitForm: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(
    private _router: Router,
    private _formsValidityService: FormsValidityService
  ) {}

  public sendFormValues(form: FormGroup) {
    this._formsValidityService.formsValidity$.next(true);
    this.submitForm.emit(true);
  }
}
