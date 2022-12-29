import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal-header',
  templateUrl: './modal-header.component.html',
  styleUrls: ['./modal-header.component.scss'],
})
export class ModalHeaderComponent implements OnInit {
  @Input() public title!: string;

  constructor() {}

  ngOnInit(): void {}
}
