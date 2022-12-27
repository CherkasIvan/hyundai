import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { routingPathEnum } from './shared/consts/routing-path-enum';
// import { UrlResolverService } from './shared/services/url-resolver.service';
// import {BrokersAuthGuard} from './core/broker-auth/guards/brokers-auth.guard';
// import {UsersAuthGuard} from './pages/user-auth/guards/users-auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/' + routingPathEnum.BrokerAuthentication,
    pathMatch: 'full',
  },
  {
    path: routingPathEnum.BrokerAuthentication,
    loadChildren: () =>
      import('./pages/broker-auth/broker-auth.module').then(
        (module) => module.BrokerAuthModule
      ),
  },
  {
    path: routingPathEnum.ClientAuthentication,
    loadChildren: () =>
      import('./pages/user-auth-page/user-auth-page.module').then(
        (module) => module.UserAuthPageModule
      ),
  },
  {
    path: routingPathEnum.MainPage,
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
