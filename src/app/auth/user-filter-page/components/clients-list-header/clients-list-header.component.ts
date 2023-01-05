import { Component, OnInit } from '@angular/core';

import { ModalService } from '../../../../shared/services/modal.service';

@Component({
  selector: 'tes-clients-list-header',
  templateUrl: './clients-list-header.component.html',
  styleUrls: ['./clients-list-header.component.scss'],
})
export class ClientsListHeaderComponent implements OnInit {
  public openAddUserModal() {
    this._modalService.addNewClientDialog();
  }
  constructor(private _modalService: ModalService) {}

  ngOnInit(): void {}
}
