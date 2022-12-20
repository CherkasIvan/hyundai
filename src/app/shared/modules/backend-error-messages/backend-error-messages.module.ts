import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {BackendErrorMessagesComponent} from './backend-error-messages.component';

@NgModule({
  declarations: [BackendErrorMessagesComponent],
  exports: [BackendErrorMessagesComponent],
  imports: [CommonModule],
})
export class BackendErrorMessagesModule {}
