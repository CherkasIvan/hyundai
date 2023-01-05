import { Injectable } from '@angular/core';

import { DocumentsInterface } from '../../pages/documents-payments-page/models/interfaces/documents.interface';
import { StepsInterface } from '../../pages/main-form-content/models/interfaces/steps.interface';
import { CalculationLoanDataInterface } from '../models/interfaces/calculation-loan-data.interface';
import { InsuranceOptionsInterface } from '../models/interfaces/insurance-options.interface';

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

  public calculationLoanData: CalculationLoanDataInterface[] = [
    {
      type: 'input',
      templateOptions: {
        label: 'VIN',
        placeholder: 'Введите VIN',
        required: true,
      },
    },
    {
      type: 'input',
      templateOptions: {
        label: 'Марка',
        placeholder: 'Введите марку автомобиля',
        required: true,
      },
    },
    {
      type: 'input',
      templateOptions: {
        label: 'Модель',
        placeholder: 'Введите модель автомобиля',
        required: true,
      },
    },
    {
      type: 'input',
      templateOptions: {
        label: 'Год выпуска',
        placeholder: 'Введите год выпуска автомобиля',
        required: true,
      },
    },
    {
      type: 'input',
      templateOptions: {
        label: 'ПТС',
        placeholder: 'Введите год выпуска автомобиля из ПТС',
        required: true,
      },
    },
    {
      type: 'input',
      templateOptions: {
        label: 'Объем двигателя',
        placeholder: 'Введите объем двигателя автомобиля',
        required: true,
      },
    },
    {
      type: 'select',
      templateOptions: {
        label: 'Трансмиссия автомобиля',
        placeholder: 'Выберите тип трансмиссии автомобиля',
        description: 'Выберите тип трансмиссии автомобиля',
        required: true,
        options: [
          { value: 'Механическая', label: 'Механическая' },
          { value: 'Автоматическая', label: 'Автоматическая' },
        ],
      },
    },
    {
      type: 'radio',
      templateOptions: {
        label: 'Тип кузова',
        options: [
          { value: 1, label: 'Седан' },
          { value: 2, label: 'Внедорожник' },
          { value: 3, label: 'Универсал' },
          { value: 4, label: 'Кроссовер' },
          { value: 5, label: 'Хэтчбек' },
          { value: 6, label: 'Минивэн' },
        ],
      },
    },
    {
      type: 'input',
      templateOptions: {
        label: 'Стоимость авто, руб',
        placeholder: 'Введите стоимость автомобиля',
        required: true,
      },
    },
    {
      type: 'slider',
      templateOptions: {
        min: 0,
        max: 7000000,
        step: 1,
      },
    },
    {
      type: 'toggle',
      templateOptions: {
        label: 'Телематическая система',
        required: true,
      },
    },
  ];

  public calculationSteps: StepsInterface[] = [
    { content: 'Информация об автомобиле', path: 'car-info' },
    { content: 'Собственник', path: 'owner' },
    { content: 'Водители', path: 'drivers' },
    { content: 'Параметры кредита', path: 'loan-params' },
    { content: 'Параметры страховых продуктов', path: 'insurenses-params' },
    { content: 'Расчет продуктов', path: 'product-calculation' },
  ];

  public processingSteps: StepsInterface[] = [
    { content: 'Личная информация', path: 'client-info' },
    { content: 'Работа', path: 'client-job' },
    { content: 'Сводка', path: 'client-summary' },
    { content: 'Одобрение', path: 'client-approval' },
  ];

  public insuranceCardsObjects: any[] = [
    {
      img: 'ingostrah.png',
      status: 'green',
      insurances: [
        {
          label: 'КАСКО',
          checkbox: true,
          description: 'Lorem ipsum dolor sit amet consectetur.',
          options: false,
          price: '51 000 ₽',
        },
        {
          label: 'ОСАГО',
          checkbox: false,
          description: 'Lorem ipsum dolor sit amet consectetur.',
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
          description: 'Lorem ipsum dolor sit amet consectetur.',
          options: true,
          price: '51 000 ₽',
        },
        {
          label: 'ОСАГО',
          checkbox: false,
          description: 'Lorem ipsum dolor sit amet consectetur.',
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
          description: 'Lorem ipsum dolor sit amet consectetur.',
          options: false,
          price: '51 000 ₽',
        },
        {
          label: 'ОСАГО',
          checkbox: false,
          description: 'Lorem ipsum dolor sit amet consectetur.',
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
