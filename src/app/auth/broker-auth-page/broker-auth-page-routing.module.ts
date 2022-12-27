import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';

import { BrokerAuthPageComponent } from './components/broker-auth-page/broker-auth-page.component';

const routes: Routes = [{ path: '', component: BrokerAuthPageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BrokerAuthPageRoutingModule {}
