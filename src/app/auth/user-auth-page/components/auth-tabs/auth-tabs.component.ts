import { Component, OnInit } from '@angular/core';

import { MatTabChangeEvent } from '@angular/material/tabs';

@Component({
  selector: 'app-auth-tabs',
  templateUrl: './auth-tabs.component.html',
  styleUrls: ['./auth-tabs.component.scss'],
})
export class AuthTabsComponent implements OnInit {
  public indexOfTab!: number;
  public onTabChange(event: MatTabChangeEvent) {
    this.indexOfTab = event.index;
  }
  constructor() {}

  public ngOnInit(): void {
    this.indexOfTab = 0;
  }
}
