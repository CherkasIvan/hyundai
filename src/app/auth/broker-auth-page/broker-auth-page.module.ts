import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';

import { MatTabsModule } from '@angular/material/tabs';
import { MatStepperModule } from '@angular/material/stepper';
import { MatTooltipModule } from '@angular/material/tooltip';

import { StoreModule } from '@ngrx/store';
import { reducers } from './store/broker-auth.reducers';
import { BrokerAuthEffects } from './store/broker-auth.effects';

import { BrokerAuthService } from './service/broker-auth.service';

import { BrokerAuthPageRoutingModule } from './broker-auth-page-routing.module';
import { SharedModule } from '../../shared/shared.module';

import { BrokerAuthTabsComponent } from './components/broker-auth-tabs/broker-auth-tabs.component';
import { BrokerAuthPageComponent } from './components/broker-auth-page/broker-auth-page.component';
import { AuthBrokerIdFormComponent } from './components/auth-broker-id-form/auth-broker-id-form.component';
import { AuthEmailFormComponent } from './components/auth-email-form/auth-email-form.component';

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
    BrokerAuthPageRoutingModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature('broker-auth', reducers),
    EffectsModule.forFeature([BrokerAuthEffects]),
    SharedModule,
  ],
  providers: [BrokerAuthService],
})
export class BrokerAuthPageModule {}
