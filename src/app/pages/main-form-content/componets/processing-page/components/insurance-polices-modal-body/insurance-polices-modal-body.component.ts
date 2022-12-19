import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'mc-insurance-polices-modal-body',
  templateUrl: './insurance-polices-modal-body.component.html',
  styleUrls: ['./insurance-polices-modal-body.component.scss'],
})
export class InsurancePolicesModalBodyComponent implements OnInit {
  public cardsObjects = [
    {
      img: 'ingostrah.png',
      status: 'green',
      kasko: {
        label: 'КАСКО',
        checkbox: true,
        description: 'dd',
        price: '51 000 ₽',
      },
      osago: {
        label: 'ОСАГО',
        checkbox: false,
        description: 'dd',
        price: '13 000 ₽',
      },
    },
    {
      img: 'sovkom_strah.png',
      status: 'yeelow',
      kasko: {
        label: 'КАСКО',
        checkbox: true,
        description: 'dd',
        price: '51 000 ₽',
      },
      osago: {
        label: 'ОСАГО',
        checkbox: false,
        description: 'dd',
        price: '13 000 ₽',
      },
    },
    {
      img: 'vsk.png',
      status: 'yeelow',
      kasko: {
        label: 'КАСКО',
        checkbox: true,
        description: 'dd',
        price: '51 000 ₽',
      },
      osago: {
        label: 'ОСАГО',
        checkbox: false,
        description: 'dd',
        price: '13 000 ₽',
      },
    },
  ];

  constructor() {}

  ngOnInit(): void {
    console.log(this.cardsObjects);
  }
}
