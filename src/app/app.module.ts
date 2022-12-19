import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {StoreRouterConnectingModule, routerReducer} from '@ngrx/router-store';
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';

import {FormlyMaterialModule} from '@ngx-formly/material';
import {FormlyMatInputModule} from '@ngx-formly/material/input';
import {FormlyMatSliderModule} from '@ngx-formly/material/slider';
import {FormlyMatToggleModule} from '@ngx-formly/material/toggle';

import {FormlyModule} from '@ngx-formly/core';

import {AppRoutingModule} from './app-routing.module';
import {MainFormContentPageModule} from './pages/main-form-content/main-form-content.page.module';
import {CoreModule} from './core/core.module';
import {AuthModule} from './pages/user-auth/auth-user.module';

import {BrokerTokenInterceptor} from './core/broker-auth/interceptor/broker-token.interceptor';
import {BrokersAuthGuard} from './core/broker-auth/guards/brokers-auth.guard';
import {UsersAuthGuard} from './pages/user-auth/guards/users-auth.guard';

import {environment} from '../environments/environment';

import {AppComponent} from './app.component';
// import {UrlResolverService} from './pages/shared/services/url-resolver.service';

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
    MainFormContentPageModule,
    FormlyModule.forRoot(),
    FormlyMaterialModule,
    FormlyMatToggleModule,
    FormlyMatSliderModule,
    FormlyMatInputModule,
    StoreModule.forRoot({
      router: routerReducer,
    }),
    StoreRouterConnectingModule.forRoot(),
  ],
  providers: [
    BrokersAuthGuard,
    // UrlResolverService,
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
