import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MockDataService {
  public documentsPayments: Object = [
    {
      insurense: 'осаго',
      bank_img: 'sovkom_logo.svg',
      bank_label: 'cовкомбанк',
      sum: '2 365 654 р',
      treaty: '1234567890',
      status: 'Отправлено в банк',
      documents: [
        {
          img: null,
          label: 'Полис',
        },
        { img: null, label: 'Зявление ' },
        { img: null, label: 'Договор' },
        { img: null, label: 'Приложение 1' },
        { img: null, label: 'Счет' },
      ],
    },
    {
      insurense: 'каско',
      bank_img: 'sovkom_logo.svg',
      bank_label: 'cовкомбанк',
      sum: '3 555 654 р',
      treaty: '0987654321',
      status: 'Обрабатывается',
      documents: [
        {
          img: null,
          label: 'Полис',
        },
        { img: null, label: 'Зявление ' },
        { img: null, label: 'Договор' },
        { img: null, label: 'Приложение 1' },
        { img: null, label: 'Счет' },
      ],
    },
  ];

  constructor() {}
}
