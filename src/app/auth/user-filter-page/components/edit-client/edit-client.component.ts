import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { forkJoin, Subscription } from 'rxjs';

import { CommonDataService } from '../../../../shared/services/common-data.service';
import { PersistenceService } from '../../../../shared/services/persistence.service';
import { GetUsersService } from '../../services/get-users.service';
import { UserAuthService } from '../../services/user-auth.service';

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
    });
  }
  constructor(
    private _fb: FormBuilder,
    private _persistensService: PersistenceService,
    private _commonDatasService: CommonDataService,
    private _getUsersServics: GetUsersService,
    private _userServics: UserAuthService
  ) {}

  public sendClientData(formData: FormGroup) {
    const body = formData.value;
    body.clientId = this.edditClientForm.get('clientId')?.value;

    this._persistensService.set('clientId', body.clientId);

    forkJoin({
      requestOne: this._commonDatasService.editClientsDetails(body),
      requestTwo: this._getUsersServics.getClients(),
    }).subscribe();
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
