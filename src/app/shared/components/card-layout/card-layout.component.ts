import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'tes-card-layout',
  templateUrl: './card-layout.component.html',
  styleUrls: ['./card-layout.component.scss'],
})
export class CardLayoutComponent implements OnInit {
  @Input() public title!: string;
  constructor() {}

  ngOnInit(): void {}
}
