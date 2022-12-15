import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SideBarModule } from '../components/side-bar/side-bar.module';
import { DocumentsPaymentsPageComponent } from './documents-payments-page.component';
import { DocumentsComponent } from './components/documents/documents.component';

@NgModule({
  declarations: [DocumentsPaymentsPageComponent, DocumentsComponent],
  imports: [
    CommonModule,
    SideBarModule
  ],
  exports: [DocumentsPaymentsPageComponent],
  bootstrap:[DocumentsPaymentsPageComponent]
})
export class DocumentsPaymentsPageModule {}