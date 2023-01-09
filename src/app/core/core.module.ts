import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { LoaderService } from './services/loader.service';

import { BrokerTokenInterceptor } from './interceptors/broker-token.interceptor';
import { LoadingInterceptor } from './interceptors/loading.interceptor';

import { SpinnerComponent } from './components/spinner/spinner.component';
import { BrokersAuthGuard } from '../auth/broker-auth-page/guards/brokers-auth.guard';
import { ClientAuthGuard } from '../auth/user-filter-page/guards/client-auth.guard';

@NgModule({
  declarations: [SpinnerComponent],
  imports: [CommonModule],
  exports: [SpinnerComponent],
  providers: [
    LoaderService,
    BrokersAuthGuard,
    ClientAuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoadingInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: BrokerTokenInterceptor,
      multi: true,
    },
  ],
})
export class CoreModule {}
