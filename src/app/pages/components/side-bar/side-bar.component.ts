import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss'],
})
export class SideBarComponent implements OnInit {
  @Input() public steps!: any; // НАПИСАТЬ ИНТЕРФЕЙС!

  constructor() {}

  ngOnInit(): void {}
}
