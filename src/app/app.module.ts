import {EffectsModule} from '@ngrx/effects';
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {StoreModule} from '@ngrx/store';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyMaterialModule } from '@ngx-formly/material';
import { FormlyMatInputModule } from '@ngx-formly/material/input';
import { FormlyMatSliderModule } from '@ngx-formly/material/slider';
import { FormlyMatToggleModule } from '@ngx-formly/material/toggle';

import {AppRoutingModule} from './app-routing.module';
import {MainContainerPageModule} from './pages/main-container-page/main-container-page.module';

import {AppComponent} from './app.component';
import {environment} from '../environments/environment';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CoreModule} from './core/core.module';
import {AuthModule} from './pages/user-auth/auth-user.module';
import {BrokerTokenInterceptor} from './core/broker-auth/interceptor/broker-token.interceptor';
import {BrokersAuthGuard} from './core/broker-auth/guards/brokers-auth.guard';
import {UsersAuthGuard} from './pages/main-container-page/guards/users-auth.guard';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AuthModule,
    CoreModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
      autoPause: true, // Pauses recording actions and state changes when the extension window is not open
    }),
    BrowserAnimationsModule,
    MainContainerPageModule,
    FormlyModule.forRoot(),
    FormlyMaterialModule,
    FormlyMatToggleModule,
    FormlyMatSliderModule,
    FormlyMatInputModule

  ],
  providers: [
    BrokersAuthGuard,
    UsersAuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: BrokerTokenInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
