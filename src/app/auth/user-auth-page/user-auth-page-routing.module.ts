import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserAuthPageComponent } from './user-auth-page.component';

const routes: Routes = [{ path: '', component: UserAuthPageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserAuthRoutingModule {}
