import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';

import {MockDataService} from '../pages/shared/services/mock-data.service';

import {BrokerAuthModule} from '../broker-auth.module';

@NgModule({
  declarations: [],
  providers: [MockDataService],
  imports: [CommonModule, BrokerAuthModule],
})
export class CoreModule {}
