import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClientFilterPageComponent } from './client-filter-page.component';

const routes: Routes = [{ path: '', component: ClientFilterPageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClientFilterPageRoutingModule {}
