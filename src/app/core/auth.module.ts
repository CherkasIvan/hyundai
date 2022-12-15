import {Routes, RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {EffectsModule} from '@ngrx/effects';

import {MatTabsModule} from '@angular/material/tabs';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatStepperModule} from '@angular/material/stepper';
import {MatTooltipModule} from '@angular/material/tooltip';

import {StoreModule} from '@ngrx/store';
import {reducers} from './auth/store/auth.reducers';
import {AuthService} from './auth/service/auth.service';

import {AuthEffects} from './auth/store/auth.effects';
import {BackendErrorMessagesModule} from '../pages/shared/modules/backend-error-messages/backend-error-messages.module';
import {PersistenceService} from '../pages/shared/services/persistence.service';
import {AuthTabsComponent} from './auth/components/auth-tabs/auth-tabs.component';
import {RegisterComponent} from './auth/components/register/register.component';
import {TokenService} from 'src/app/pages/shared/services/token.service';

const routes: Routes = [
  {
    path: '',
    component: RegisterComponent,
  },
];

@NgModule({
  declarations: [RegisterComponent, AuthTabsComponent],
  imports: [
    CommonModule,
    MatTabsModule,
    MatStepperModule,
    MatFormFieldModule,
    MatTooltipModule,
    MatIconModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature('register', reducers),
    EffectsModule.forFeature([AuthEffects]),
    BackendErrorMessagesModule,
  ],
  providers: [AuthService, PersistenceService, TokenService],
})
export class AuthModule {}
