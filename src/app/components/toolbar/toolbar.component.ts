import { Component, OnInit } from '@angular/core';
import { MAIN_MENU } from '../producer-menu/menu.consts';
import { MenuItem } from '../producer-menu/menu.interface';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
  menuItems: MenuItem[] = MAIN_MENU;
  constructor() { }

  ngOnInit(): void {
  }

}
