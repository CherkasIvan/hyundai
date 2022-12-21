import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { MainFormContentPageRoutingModule } from './main-form-content-page-routing.module';

import { ModalService } from '../../shared/services/modal.service';

import { MainFormContentPageComponent } from './main-form-content-page.component';
import { MainFormHeaderComponent } from './componets/main-form-header/main-form-header.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [MainFormHeaderComponent, MainFormContentPageComponent],
  imports: [
    CommonModule,
    RouterModule,
    MainFormContentPageRoutingModule,
    SharedModule,
  ],
  providers: [ModalService],
  exports: [MainFormContentPageComponent],
  bootstrap: [MainFormContentPageComponent],
})
export class MainFormContentPageModule {}
