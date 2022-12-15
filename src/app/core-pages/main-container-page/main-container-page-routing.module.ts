import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {MainContainerPageComponent} from './main-container-page.component';

const routes: Routes = [{path: '', component: MainContainerPageComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainContainerPageRoutingModule {}
