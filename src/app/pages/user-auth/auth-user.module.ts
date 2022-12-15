import {Routes, RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';

import {MatTabsModule} from '@angular/material/tabs';
import {MatIconModule} from '@angular/material/icon';
import {MainContainerPageComponent} from '../main-container-page/main-container-page.component';

import {RegisterComponent} from './components/register/register.component';
import {StoreModule} from '@ngrx/store';
import {reducers} from './store/userReducers';
import {UserAuthService} from './services/user-auth.service';
import {EffectsModule} from '@ngrx/effects';

import {RegisterEffect} from './store/userRegister.effect';
import {BackendErrorMessagesModule} from '../shared/modules/backend-error-messages/backend-error-messages.module';
import {PersistenceService} from '../shared/services/persistence.service';
import {AuthTabsComponent} from './components/auth-tabs/auth-tabs.component';
import {MatStepperModule} from '@angular/material/stepper';
import {MatFormFieldModule} from '@angular/material/form-field';
import {TesNavigationLogoComponent} from './components/tes-navigation-logo/tes-navigation-logo.component';
import {MatTooltipModule} from '@angular/material/tooltip';
import {AuthUserRoutingModule} from './auth-user-routing.module';

const routes: Routes = [
  {
    path: 'main',
    component: MainContainerPageComponent,
  },
];

@NgModule({
  declarations: [
    RegisterComponent,
    AuthTabsComponent,
    TesNavigationLogoComponent,
  ],
  imports: [
    CommonModule,
    MatTabsModule,
    MatStepperModule,
    MatFormFieldModule,
    MatTooltipModule,
    MatIconModule,
    ReactiveFormsModule,
    AuthUserRoutingModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature('user-auth', reducers),
    EffectsModule.forFeature([RegisterEffect]),
    BackendErrorMessagesModule,
  ],
  providers: [UserAuthService, PersistenceService],
})
export class AuthModule {}
