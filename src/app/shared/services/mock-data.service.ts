import { Injectable } from '@angular/core';

import { DocumentsInterface } from '../../pages/documents-payments-page/models/interfaces/documents.interface';
import { InsuranceOptionsInterface } from '../models/interfaces/insurance-options.interface';
import { ModalCardInterface } from '../models/interfaces/modal-card.interface';

@Injectable({
  providedIn: 'root',
})
export class MockDataService {
  public documentsPayments: DocumentsInterface[] = [
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
        { img: null, label: 'Заявление ' },
        { img: null, label: 'Договор' },
        { img: null, label: 'Приложение 1' },
        { img: null, label: 'Счет' },
      ],
    },
  ];

  public insuranceCardsObjects: ModalCardInterface[] = [
    {
      img: 'ingostrah.png',
      status: 'green',
      insurances: [
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
      insurances: [
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
      insurances: [
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

  public insuranceOptions: InsuranceOptionsInterface[] = [
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
        { value: 1, label: 'Option 5' },
        { value: 2, label: 'Option 6' },
        { value: 3, label: 'Option 7' },
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
        { value: 1, label: 'Option 1' },
        { value: 2, label: 'Option 2' },
        { value: 3, label: 'Option 3' },
      ],
    },
  ];
  constructor() {}
}
