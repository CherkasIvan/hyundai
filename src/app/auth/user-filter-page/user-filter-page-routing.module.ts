import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserFilterPageComponent } from './user-filter-page.component';

const routes: Routes = [{ path: '', component: UserFilterPageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserFilterPageRoutingModule {}
