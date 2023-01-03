import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { routingPathEnum } from './shared/consts/routing-path-enum';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/' + routingPathEnum.BrokerAuthentication,
    pathMatch: 'full',
  },
  {
    path: routingPathEnum.BrokerAuthentication,
    loadChildren: () =>
      import('./auth/broker-auth-page/broker-auth-page.module').then(
        (module) => module.BrokerAuthPageModule
      ),
  },
  {
    path: routingPathEnum.ClientAuthentication,
    loadChildren: () =>
      import('./auth/user-auth-page/user-auth-page.module').then(
        (module) => module.UserAuthPageModule
      ),
  },
  {
    path: routingPathEnum.ClientFilterAuth,
    loadChildren: () =>
      import('./auth/user-filter-page/user-filter-page.module').then(
        (module) => module.UserFilterPageModule
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
