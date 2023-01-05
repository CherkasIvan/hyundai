import { Component, OnInit } from '@angular/core';

import { MatTabChangeEvent } from '@angular/material/tabs';
@Component({
  selector: 'tes-add-user-modal',
  templateUrl: './add-user-modal.component.html',
  styleUrls: ['./add-user-modal.component.scss'],
})
export class AddUserModalComponent implements OnInit {
  public indexOfTab!: number;

  public onTabChange(event: MatTabChangeEvent) {
    this.indexOfTab = event.index;
  }

  public nextStep(index: number) {
    console.log(index);
    if (this.indexOfTab != 2) {
      this.indexOfTab = index;
    }
  }

  public modalTitle: string = 'Добавить клиента';

  constructor() {}

  ngOnInit(): void {
    this.indexOfTab = 0;
  }
}
