import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';

import { Subscription } from 'rxjs';
import { routingPathEnum } from '../../../../shared/consts/routing-path-enum';

import { CommonDataService } from '../../../../shared/services/common-data.service';
import { PersistenceService } from '../../../../shared/services/persistence.service';
import { GetUsersService } from '../../services/get-users.service';
import { UserAuthService } from '../../services/user-auth.service';
import { AddUserModalComponent } from '../add-user-modal/add-user-modal.component';

@Component({
  selector: 'tes-edit-client',
  templateUrl: './edit-client.component.html',
  styleUrls: ['./edit-client.component.scss'],
})
export class EditClientComponent implements OnInit, OnDestroy {
  public edditClientForm!: FormGroup;

  public editClientSub$: Subscription = new Subscription();

  private initializeForms(): void {
    this.edditClientForm = this._fb.group({
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
    private _persistensService: PersistenceService,
    private _commonDatasService: CommonDataService,
    private _userServics: UserAuthService,
    private _getUsersService: GetUsersService,
    private _router: Router,
    private _dialogRef: MatDialogRef<AddUserModalComponent>
  ) {}

  public sendClientData(formData: FormGroup) {
    const isRedirect = !!this.edditClientForm.get('checkbox')?.value;
    const body = formData.value;
    body.clientId = this.edditClientForm.get('clientId')?.value;
    delete body.checkbox;
    this._persistensService.set('clientId', body.clientId);
    this._commonDatasService.editClientsDetails(body).subscribe((el) => {
      el && isRedirect
        ? this._router.navigateByUrl(
            `/${routingPathEnum.MainPage}/${routingPathEnum.LoanCalculationPage}/${routingPathEnum.CarInfo}`
          )
        : this.closeDialog();
    });
  }

  private closeDialog() {
    this._dialogRef.close();
    // this._getUsersService.getClients().subscribe();
  }

  private initializeValues(): void {
    this.editClientSub$.add(
      this._userServics.userData$.subscribe((value) => {
        this.edditClientForm.patchValue({
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
