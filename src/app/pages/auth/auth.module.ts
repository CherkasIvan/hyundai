import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';

import { RegisterComponent } from './components/register/register.component';
import { StoreModule } from '@ngrx/store';
import { reducers } from './store/reducers';
import { AuthService } from './services/auth.service';
import { EffectsModule } from '@ngrx/effects';

import { RegisterEffect } from './store/effects/register.effect';
import { BackendErrorMessagesModule } from '../shared/modules/backend-error-messages/backend-error-messages.module';
import { PersistenceService } from '../shared/services/persistence.service';
import { AuthTabsComponent } from './components/auth-tabs/auth-tabs.component';
import { MatStepperModule } from '@angular/material/stepper';
import { MatFormFieldModule } from '@angular/material/form-field';

const routes: Routes = [
  {
    path: 'register',
    component: RegisterComponent
  }
]

@NgModule({
  declarations: [
    RegisterComponent,
    AuthTabsComponent
  ],
  imports: [
    CommonModule, MatTabsModule, MatStepperModule, MatFormFieldModule, MatIconModule, ReactiveFormsModule, RouterModule.forChild(routes), StoreModule.forFeature('auth', reducers), EffectsModule.forFeature([RegisterEffect]), BackendErrorMessagesModule
  ],
  providers: [AuthService, PersistenceService]
})
export class AuthModule { }
