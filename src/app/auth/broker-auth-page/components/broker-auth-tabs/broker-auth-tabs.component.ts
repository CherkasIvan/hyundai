import { Component, OnInit } from '@angular/core';

import { MatTabChangeEvent } from '@angular/material/tabs';

@Component({
  selector: 'app-broker-auth-tabs',
  templateUrl: './broker-auth-tabs.component.html',
  styleUrls: ['./broker-auth-tabs.component.scss'],
})
export class BrokerAuthTabsComponent implements OnInit {
  public indexOfTab!: number;
  public onTabChange(event: MatTabChangeEvent) {
    this.indexOfTab = event.index;
  }
  constructor() {}

  public ngOnInit(): void {
    this.indexOfTab = 0;
  }
}
