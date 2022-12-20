import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {BackendErrorMessagesComponent} from './modules/backend-error-messages/backend-error-messages.component';

@NgModule({
  declarations: [BackendErrorMessagesComponent],
  imports: [CommonModule],
})
export class SharedModule {}
