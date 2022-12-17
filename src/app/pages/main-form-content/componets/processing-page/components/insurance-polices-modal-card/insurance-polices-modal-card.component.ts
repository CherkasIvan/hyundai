import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'mc-insurance-polices-modal-card',
  templateUrl: './insurance-polices-modal-card.component.html',
  styleUrls: ['./insurance-polices-modal-card.component.scss'],
})
export class InsurancePolicesModalCardComponent implements OnInit {
  @Input() public cardObj!: any;
  constructor() {}

  ngOnInit(): void {}
}
