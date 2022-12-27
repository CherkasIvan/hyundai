import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatTabsModule } from '@angular/material/tabs';
import { MatStepperModule } from '@angular/material/stepper';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTooltipModule } from '@angular/material/tooltip';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { reducers } from './store/userReducers';
import { RegisterEffect } from './store/userRegister.effect';

import { SharedModule } from '../../shared/shared.module';
import { UserAuthRoutingModule } from './user-auth-page-routing.module';

import { PersistenceService } from '../../shared/services/persistence.service';
import { UserAuthService } from './services/user-auth.service';

import { MainFormContentPageComponent } from '../../pages/main-form-content/main-form-content-page.component';
import { AuthTabsComponent } from './components/auth-tabs/auth-tabs.component';
import { RegisterComponent } from './components/register/register.component';
import { TesNavigationLogoComponent } from './components/tes-navigation-logo/tes-navigation-logo.component';
import { AuthorizationComponent } from './components/authorization/authorization.component';
import { UserAuthPageComponent } from './user-auth-page.component';

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
    RouterModule.forChild(routes),
    StoreModule.forFeature('user-auth', reducers),
    EffectsModule.forFeature([RegisterEffect]),
    SharedModule,
  ],
  providers: [UserAuthService, PersistenceService],
})
export class UserAuthPageModule {}