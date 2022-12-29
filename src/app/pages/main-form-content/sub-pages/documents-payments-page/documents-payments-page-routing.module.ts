import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';

import { DocumentsPaymentsPageComponent } from './documents-payments-page.component';

const routes: Routes = [
  { path: '', component: DocumentsPaymentsPageComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DocumentsPaymentsPageRoutingModule {}
