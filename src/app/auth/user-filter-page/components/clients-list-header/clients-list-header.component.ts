import { Component, OnInit } from '@angular/core';
import { ModalService } from 'src/app/shared/services/modal.service';

@Component({
  selector: 'app-clients-list-header',
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
