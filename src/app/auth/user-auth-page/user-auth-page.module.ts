import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatTabsModule } from '@angular/material/tabs';
import { MatStepperModule } from '@angular/material/stepper';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTooltipModule } from '@angular/material/tooltip';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { reducers } from './store/reducers/userRgister.reducers';
import { UserRegisterEffect } from './store/effects/userRegister.effect';
import { UserAuthEffect } from './store/effects/userAuth.effect';

import { SharedModule } from '../../shared/shared.module';
import { UserAuthRoutingModule } from './user-auth-page-routing.module';

import { PersistenceService } from '../../shared/services/persistence.service';
import { UserAuthService } from '../user-filter-page/services/user-auth.service';

import { AuthTabsComponent } from './components/auth-tabs/auth-tabs.component';
import { RegisterComponent } from './components/register/register.component';
import { TesNavigationLogoComponent } from './components/tes-navigation-logo/tes-navigation-logo.component';
import { AuthorizationComponent } from './components/authorization/authorization.component';
import { UserAuthPageComponent } from './user-auth-page.component';

@NgModule({
  declarations: [
    RegisterComponent,
    AuthTabsComponent,
    TesNavigationLogoComponent,
    AuthorizationComponent,
    UserAuthPageComponent,
  ],
  imports: [
    CommonModule,
    MatTabsModule,
    MatStepperModule,
    MatFormFieldModule,
    MatTooltipModule,
    UserAuthRoutingModule,
    StoreModule.forFeature('user-register', reducers),
    StoreModule.forFeature('user-auth', reducers),
    EffectsModule.forFeature([UserRegisterEffect, UserAuthEffect]),
    SharedModule,
  ],
  providers: [UserAuthService, PersistenceService],
})
export class UserAuthPageModule {}
