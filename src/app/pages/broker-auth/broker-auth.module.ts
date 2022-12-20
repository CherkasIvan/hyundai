import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';

import { MatTabsModule } from '@angular/material/tabs';
import { MatStepperModule } from '@angular/material/stepper';
import { MatTooltipModule } from '@angular/material/tooltip';

import { StoreModule } from '@ngrx/store';
import { reducers } from './store/broker-auth.reducers';
import { BrokerAuthService } from './service/broker-auth.service';

import { BrokerAuthEffects } from './store/broker-auth.effects';
import { BackendErrorMessagesModule } from '../../shared/modules/backend-error-messages/backend-error-messages.module';
import { PersistenceService } from '../../shared/services/persistence.service';
import { BrokerAuthTabsComponent } from './components/broker-auth-tabs/broker-auth-tabs.component';
import { BrokerAuthPageComponent } from './components/broker-auth-page/broker-auth-page.component';
import { AuthBrokerIdFormComponent } from './components/auth-broker-id-form/auth-broker-id-form.component';
import { AuthEmailFormComponent } from './components/auth-email-form/auth-email-form.component';
import { BrokerAuthRoutingModule } from './broker-auth-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';

const routes: Routes = [
  {
    path: '',
    component: BrokerAuthPageComponent,
  },
];

@NgModule({
  declarations: [
    BrokerAuthPageComponent,
    BrokerAuthTabsComponent,
    AuthBrokerIdFormComponent,
    AuthEmailFormComponent,
  ],
  imports: [
    CommonModule,
    MatTabsModule,
    MatStepperModule,
    MatTooltipModule,
    BrokerAuthRoutingModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature('broker-auth', reducers),
    EffectsModule.forFeature([BrokerAuthEffects]),
    BackendErrorMessagesModule,
    SharedModule,
  ],
  providers: [BrokerAuthService, PersistenceService],
})
export class BrokerAuthModule {}
