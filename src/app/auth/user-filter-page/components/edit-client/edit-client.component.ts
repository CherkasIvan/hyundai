import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';

import { Subscription } from 'rxjs';
import { routingPathEnum } from '../../../../shared/consts/routing-path-enum';

import { CommonDataService } from '../../../../shared/services/common-data.service';
import { PersistenceService } from '../../../../shared/services/persistence.service';
import { ClientAuthService } from '../../services/client-auth.service';
import { AddUserModalComponent } from '../add-user-modal/add-user-modal.component';

@Component({
  selector: 'tes-edit-client',
  templateUrl: './edit-client.component.html',
  styleUrls: ['./edit-client.component.scss'],
})
export class EditClientComponent implements OnInit, OnDestroy {
  public editClientForm!: FormGroup;

  public editClientSub$: Subscription = new Subscription();

  private initializeForms(): void {
    this.editClientForm = this._fb.group({
      first_name: ['', Validators.required],
      last_name: ['', Validators.required],
      patronymic: ['', Validators.required],
      email: ['', Validators.required],
      clientId: ['', Validators.required],
      checkbox: false,
    });
  }
  constructor(
    private _fb: FormBuilder,
    private _persistenceService: PersistenceService,
    private _commonDataService: CommonDataService,
    private _clientAuthService: ClientAuthService,
    private _router: Router,
    private _dialogRef: MatDialogRef<AddUserModalComponent>
  ) {}

  public sendClientData(formData: FormGroup) {
    const isRedirect = !!this.editClientForm.get('checkbox')?.value;
    const body = formData.value;
    body.clientId = this.editClientForm.get('clientId')?.value;

    delete body.checkbox;
    this._persistenceService.set('clientId', body.clientId);
    this._commonDataService.editClientsDetails(body).subscribe((el) => {
      el && isRedirect
        ? this._router.navigate([routingPathEnum.MainPage, routingPathEnum.LoanCalculationPage, routingPathEnum.CarInfo],
          {queryParams: {clientId: body.clientId}})
        : this.closeDialog();
    });
  }

  private closeDialog() {
    this._dialogRef.close();
  }

  private initializeValues(): void {
    this.editClientSub$.add(
      this._clientAuthService.userData$.subscribe((value) => {
        this.editClientForm.patchValue({
          clientId: value.clientId,
        });
      })
    );
  }

  ngOnInit(): void {
    this.initializeForms();
    this.initializeValues();
  }

  ngOnDestroy(): void {
    this.editClientSub$.unsubscribe();
  }
}
