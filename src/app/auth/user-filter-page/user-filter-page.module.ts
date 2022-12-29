import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

import { UserFilterPageRoutingModule } from './user-filter-page-routing.module';
import { SharedModule } from '../../shared/shared.module';

import { FilterComponent } from './components/filter/filter.component';
import { ClientsListComponent } from './components/clients-list/clients-list.component';
import { UserFilterPageComponent } from './user-filter-page.component';

@NgModule({
  declarations: [
    UserFilterPageComponent,
    FilterComponent,
    ClientsListComponent,
  ],
  imports: [
    UserFilterPageRoutingModule,
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    SharedModule,
  ],
})
export class UserFilterPageModule {}
