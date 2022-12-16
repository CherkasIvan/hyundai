import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BrokerAuthPageComponent} from './core/broker-auth/components/broker-auth-page/broker-auth-page.component';
import {BrokersAuthGuard} from './core/broker-auth/guards/brokers-auth.guard';
import {UsersAuthGuard} from './pages/main-container-page/guards/users-auth.guard';

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
  {
    path: 'auth-user',
    canActivate: [BrokersAuthGuard],
    loadChildren: () =>
      import('./pages/user-auth/auth-user.module').then(
        (module) => module.AuthModule
      ),
  },
  {
    path: 'main',
    // canActivate: [UsersAuthGuard],
    loadChildren: () =>
      import('./pages/main-container-page/main-container-page.module').then(
        (module) => module.MainContainerPageModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
