import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { forkJoin, Subscription } from 'rxjs';

import { CommonDataService } from '../../../../shared/services/common-data.service';
import { PersistenceService } from '../../../../shared/services/persistence.service';
import { ClientAuthService } from '../../services/client-auth.service';

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
    });
  }
  constructor(
    private _fb: FormBuilder,
    private _persistenceService: PersistenceService,
    private _commonDataService: CommonDataService,
    private _clientAuthService: ClientAuthService
  ) {}

  public sendClientData(formData: FormGroup) {
    const body = formData.value;
    body.clientId = this.editClientForm.get('clientId')?.value;

    this._persistenceService.set('clientId', body.clientId);

    forkJoin({
      requestOne: this._commonDataService.editClientsDetails(body),
      requestTwo: this._clientAuthService.getClients(),
    }).subscribe();
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
