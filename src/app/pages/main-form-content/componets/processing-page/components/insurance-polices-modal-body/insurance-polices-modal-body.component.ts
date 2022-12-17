import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'mc-insurance-polices-modal-body',
  templateUrl: './insurance-polices-modal-body.component.html',
  styleUrls: ['./insurance-polices-modal-body.component.scss'],
})
export class InsurancePolicesModalBodyComponent implements OnInit {
  public cardsObjects = [
    {
      title: 'saurabh',
      description: 'dd',
      price: 'tt',
      date: 'dd',
      img: '',
      status: '',
      kasko: '',
      osago: '',
    },
    {
      title: 'aman',
      description: 'dd',
      price: 'tt',
      date: 'dd',
      img: '',
      status: '',
      kasko: '',
      osago: '',
    },
    {
      title: 'jessica',
      description: 'dd',
      price: 'tt',
      date: 'dd',
      img: '',
      status: '',
      kasko: '',
      osago: '',
    },
    {
      title: 'rosh',
      description: 'dd',
      price: 'tt',
      date: 'dd',
      img: '',
      status: '',
      kasko: '',
      osago: '',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
