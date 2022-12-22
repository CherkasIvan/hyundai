import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { MainFormContentPageComponent } from '../main-form-content/main-form-content-page.component';

import { RegisterComponent } from './components/register/register.component';
import { StoreModule } from '@ngrx/store';
import { reducers } from './store/userReducers';
import { UserAuthService } from './services/user-auth.service';
import { EffectsModule } from '@ngrx/effects';

import { RegisterEffect } from './store/userRegister.effect';
import { PersistenceService } from '../../shared/services/persistence.service';
import { AuthTabsComponent } from './components/auth-tabs/auth-tabs.component';
import { MatStepperModule } from '@angular/material/stepper';
import { MatFormFieldModule } from '@angular/material/form-field';
import { TesNavigationLogoComponent } from './components/tes-navigation-logo/tes-navigation-logo.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import { AuthUserRoutingModule } from './auth-user-routing.module';

import { SharedModule } from '../../shared/shared.module';

const routes: Routes = [
  {
    path: 'main',
    component: MainFormContentPageComponent,
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
    AuthUserRoutingModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature('user-auth', reducers),
    EffectsModule.forFeature([RegisterEffect]),
    SharedModule,
  ],
  providers: [UserAuthService, PersistenceService],
})
export class AuthModule {}
