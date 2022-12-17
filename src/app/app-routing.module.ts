import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {BrokerAuthPageComponent} from './core/broker-auth/components/broker-auth-page/broker-auth-page.component';
import {UrlResolverService} from './pages/shared/services/url-resolver.service';
// import {BrokersAuthGuard} from './core/broker-auth/guards/brokers-auth.guard';
// import {UsersAuthGuard} from './pages/user-auth/guards/users-auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/auth-broker',
    pathMatch: 'full',
  },
  {
    path: 'auth-broker',
    component: BrokerAuthPageComponent,
  },
  // {
  //   path: 'auth-user',
  //   loadChildren: () =>
  //     import('./pages/user-auth/auth-user.module').then(
  //       (module) => module.AuthModule
  //     ),
  // },
  {
    path: 'main-form',
    // resolve: {entity: UrlResolverService},
    // canActivate: [UsersAuthGuard],
    // canActivate: [BrokersAuthGuard],
    loadChildren: () =>
      import('./pages/main-form-content/main-form-content.page.module').then(
        (module) => module.MainFormContentPageModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
