import {Component, OnInit} from '@angular/core';
import {MatTabChangeEvent} from '@angular/material/tabs';

@Component({
  selector: 'mc-broker-auth-tabs',
  templateUrl: './broker-auth-tabs.component.html',
  styleUrls: ['./broker-auth-tabs.component.scss'],
})
export class BrokerAuthTabsComponent implements OnInit {
  public indexOfTab!: number;
  onTabChange(event: MatTabChangeEvent) {
    this.indexOfTab = event.index;
  }
  constructor() {}

  ngOnInit(): void {
    this.indexOfTab = 0;
  }
}
