import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BrokerAuthPageComponent} from './core/broker-auth/components/broker-auth-page/broker-auth-page.component';
import {MainContainerPageModule} from './core-pages/main-container-page/main-container-page.module';

const routes: Routes = [
  {path: '', redirectTo: '/auth-broker', pathMatch: 'full'},
  {path: 'auth-broker', component: BrokerAuthPageComponent},
  {
    path: 'auth-user',
    loadChildren: () =>
      import('./pages/auth/auth.module').then((module) => module.AuthModule),
  },
  {
    path: 'main',
    loadChildren: () =>
      import(
        './core-pages/main-container-page/main-container-page.module'
      ).then((module) => module.MainContainerPageModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
