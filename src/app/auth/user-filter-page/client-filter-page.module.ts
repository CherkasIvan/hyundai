import { forwardRef, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';

import { SharedModule } from '../../shared/shared.module';
import { ClientFilterPageRoutingModule } from './client-filter-page-routing.module';

import { ModalService } from '../../shared/services/modal.service';
import { ClientAuthService } from './services/client-auth.service';

import { FilterComponent } from './components/filter/filter.component';
import { ClientsListComponent } from './components/clients-list/clients-list.component';
import { ClientFilterPageComponent } from './client-filter-page.component';
import { AddUserModalComponent } from './components/add-user-modal/add-user-modal.component';
import { ClientsListHeaderComponent } from './components/clients-list-header/clients-list-header.component';
import { TablePaginatorComponent } from './components/table-paginator/table-paginator.component';
import { ClientPhoneComponent } from './components/client-phone/client-phone.component';
import { ClientVerificationCodeComponent } from './components/client-verification-code/client-verification-code.component';
import { EditClientComponent } from './components/edit-client/edit-client.component';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { BrokerAuthService } from '../broker-auth-page/service/broker-auth.service';
import { ClientFilterPageEffects } from './store/effects/client-filter-page.effects';
import { reducers } from './store/reducers/client-filter-page.reducers';

@NgModule({
  declarations: [
    ClientFilterPageComponent,
    FilterComponent,
    ClientsListComponent,
    AddUserModalComponent,
    ClientsListHeaderComponent,
    TablePaginatorComponent,
    ClientPhoneComponent,
    ClientVerificationCodeComponent,
    EditClientComponent,
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatSortModule,
    MatInputModule,
    ClientFilterPageRoutingModule,
    StoreModule.forFeature('client-filter', reducers),
    EffectsModule.forFeature([ClientFilterPageEffects]),
    MatTableModule,
    MatIconModule,
    SharedModule,
  ],
  providers: [
    ModalService,
    ClientAuthService,
    BrokerAuthService,
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => TablePaginatorComponent),
      multi: true,
    },
  ],
})
export class ClientFilterPageModule {}
