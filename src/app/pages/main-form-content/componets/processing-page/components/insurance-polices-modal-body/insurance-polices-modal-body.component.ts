import {Component, OnInit} from '@angular/core';
import {ModalService} from 'src/app/pages/shared/services/modal.service';

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
      insurences: [
        {
          label: 'КАСКО',
          checkbox: true,
          description: 'dd',
          options: false,
          price: '51 000 ₽',
        },
        {
          label: 'ОСАГО',
          checkbox: false,
          description: 'dd',
          options: false,
          price: '13 000 ₽',
        },
      ],
    },
    {
      img: 'sovkom_strah.png',
      status: 'yellow',
      insurences: [
        {
          label: 'КАСКО',
          checkbox: true,
          description: 'dd',
          options: true,
          price: '51 000 ₽',
        },
        {
          label: 'ОСАГО',
          checkbox: false,
          description: 'dd',
          options: false,
          price: '13 000 ₽',
        },
      ],
    },
    {
      img: 'vsk.png',
      status: 'yellow',
      insurences: [
        {
          label: 'КАСКО',
          checkbox: true,
          description: 'dd',
          options: false,
          price: '51 000 ₽',
        },
        {
          label: 'ОСАГО',
          checkbox: false,
          description: 'dd',
          options: false,
          price: '13 000 ₽',
        },
      ],
    },
  ];

  public options: any[] = [
    {
      key: 'Input1',
      type: 'input',
      label: 'Опция',
      placeholder: 'опция',
    },
    {
      key: 'Select1',
      type: 'select',
      label: 'Опция',
      placeholder: 'опция',
      options: [
        {value: 1, label: 'Option 5'},
        {value: 2, label: 'Option 6'},
        {value: 3, label: 'Option 7'},
      ],
    },
    {
      key: 'Input2',
      type: 'input',
      label: 'Опция',
      placeholder: 'опция',
    },
    {
      key: 'Select2',
      type: 'select',
      label: 'Опция',
      placeholder: 'опция',
      options: [
        {value: 1, label: 'Option 1'},
        {value: 2, label: 'Option 2'},
        {value: 3, label: 'Option 3'},
      ],
    },
  ];

  public getCard(card: any): Object {
    this.cardsObjects = [];
    this.cardsObjects.push(card);
    return this.cardsObjects;
  }

  constructor(public modalService: ModalService) {}

  ngOnInit(): void {}
}
