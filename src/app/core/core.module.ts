import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { BrokerTokenInterceptor } from './broker-token.interceptor';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: BrokerTokenInterceptor,
      multi: true,
    },
  ],
})
export class CoreModule {}
