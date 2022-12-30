import { Component, Input, OnInit } from '@angular/core';

import { BackendErrorsType } from '../../models/types/backendErrors.type';

@Component({
  selector: 'app-backend-error-messages',
  templateUrl: './backend-error-messages.component.html',
  styleUrls: ['./backend-error-messages.component.scss'],
})
export class BackendErrorMessagesComponent implements OnInit {
  @Input('backendErrors') backendErrorsProps!: BackendErrorsType | null;
  public errorMessages?: string[];

  constructor() {}

  ngOnInit(): void {
    this.errorMessages = Object.keys(this.backendErrorsProps!).map(
      (name: string) => {
        const messages = this.backendErrorsProps![name].join(', ');
        return `${name} ${messages}`;
      }
    );
  }
}
