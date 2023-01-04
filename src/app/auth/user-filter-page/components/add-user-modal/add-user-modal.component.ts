import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatTabChangeEvent } from '@angular/material/tabs';
import { Router } from '@angular/router';
import { routingPathEnum } from 'src/app/shared/consts/routing-path-enum';
import { CommonDataService } from 'src/app/shared/services/common-data.service';
import { ModalService } from 'src/app/shared/services/modal.service';
import { PersistenceService } from 'src/app/shared/services/persistence.service';
import { UserAuthService } from '../../services/user-auth.service';

@Component({
  selector: 'app-add-user-modal',
  templateUrl: './add-user-modal.component.html',
  styleUrls: ['./add-user-modal.component.scss'],
})
export class AddUserModalComponent implements OnInit {
  public indexOfTab!: number;
  public onTabChange(event: MatTabChangeEvent) {
    this.indexOfTab = event.index;
  }

  public nextStep() {
    if (this.indexOfTab != 2) {
      this.indexOfTab = this.indexOfTab + 1;
    }
  }

  public modalTitle: string = 'Добавить клиента';
  public addUserForm!: FormGroup;
  public addNewClientForm!: FormGroup;
  public edditClientForm!: FormGroup;

  private initializeForms(): void {
    this.addUserForm = this._fb.group({
      phone: ['', Validators.required],
      test: true,
    });

    this.addNewClientForm = this._fb.group({
      code: ['', Validators.required],
      clientId: ['', Validators.required],
    });

    this.edditClientForm = this._fb.group({
      first_name: ['', Validators.required],
      last_name: ['', Validators.required],
      patronymic: ['', Validators.required],
      email: ['', Validators.required],
    });
  }

  public initializeValues(): void {
    this._userServics.userData$.subscribe((value) => {
      this.addNewClientForm.patchValue({
        clientId: value.clientId,
        code: value.testCode,
      });
    });
  }

  constructor(
    private _fb: FormBuilder,
    private _userServics: UserAuthService,
    private _commonDatasService: CommonDataService,
    private _persistensService: PersistenceService,
    private _router: Router,
    private _modalService: ModalService
  ) {}

  public sendClientData(formData: FormGroup) {
    if (formData.value.phone && formData.value.test) {
      this._userServics.userRegister(formData.value).subscribe((el) => {
        if (el) {
          this.nextStep();
        }
      });
    }

    if (formData.value.code && formData.value.clientId) {
      this._userServics.userAuth(formData.value).subscribe((el) => {
        if (el) {
          this.nextStep();
        }
      });
    }

    if (
      formData.value.first_name &&
      formData.value.last_name &&
      formData.value.patronymic &&
      formData.value.email
    ) {
      const body = formData.value;
      body.clientId = this.addNewClientForm.get('clientId')?.value;

      this._persistensService.set('clientId', body.clientId);
      this._commonDatasService.editClientsDetails(body).subscribe((el) => {
        if (el) {
        }
      });
      this._router.navigateByUrl(`/${routingPathEnum.ClientFilterAuth}`);
    }
  }

  ngOnInit(): void {
    this.indexOfTab = 0;
    this.initializeForms();
    this.initializeValues();
  }
}
