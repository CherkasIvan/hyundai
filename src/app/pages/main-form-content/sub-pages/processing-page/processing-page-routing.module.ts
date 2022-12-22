import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { ProcessingPageComponent } from './processing-page.component';

const routes: Routes = [{ path: '', component: ProcessingPageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProcessingPageRoutingModule {}
