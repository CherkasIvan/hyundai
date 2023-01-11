import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'tes-card-title',
  templateUrl: './card-title.component.html',
  styleUrls: ['./card-title.component.scss'],
})
export class CardTitleComponent implements OnInit {
  @Input() public title!: string;
  constructor() {}

  ngOnInit(): void {}
}
