import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

<<<<<<< HEAD
import {RegisterComponent} from './pages/auth/components/register/register.component';
=======
import { routingPathEnum } from './shared/consts/routing-path-enum';
// import { UrlResolverService } from './shared/services/url-resolver.service';
// import {BrokersAuthGuard} from './core/broker-auth/guards/brokers-auth.guard';
// import {UsersAuthGuard} from './pages/user-auth/guards/users-auth.guard';
>>>>>>> ed7839c66f655bbe579ef1b941cbf57cf4ea4a9f

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
      import('./pages/user-auth/auth-user.module').then(
        (module) => module.AuthModule
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
