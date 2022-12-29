import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DocumentsPaymentsPageRoutingModule } from './documents-payments-page-routing.module';

import { DocumentsComponent } from './components/documents/documents.component';
import { DocumentsPaymentsPageComponent } from './documents-payments-page.component';

@NgModule({
  declarations: [DocumentsComponent, DocumentsPaymentsPageComponent],
  exports: [DocumentsComponent, DocumentsPaymentsPageComponent],
  imports: [DocumentsPaymentsPageRoutingModule, CommonModule],
})
export class DocumentsPaymentsPageModule {}
