import { Component, OnInit } from '@angular/core';
import { ModalService } from 'src/app/shared/services/modal.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent implements OnInit {
  public openAddUserModal() {
    this._modalService.addNewClientDialog();
  }
  constructor(private _modalService: ModalService) {}

  ngOnInit(): void {}
}
