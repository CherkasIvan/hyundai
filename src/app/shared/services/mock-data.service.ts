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
        { img: null, label: 'Заявление ' },
        { img: null, label: 'Договор' },
        { img: null, label: 'Приложение 1' },
        { img: null, label: 'Счет' },
      ],
    },
  ];

  public calculationLoanData: Object = [
    {
      key: 'vin',
      type: 'input',
      templateOptions: {
        label: 'VIN',
        placeholder: 'Введите VIN',
        required: true,
      },
    },
    {
      key: 'car_mark',
      type: 'input',
      templateOptions: {
        label: 'Марка',
        placeholder: 'Введите марку автомобиля',
        required: true,
      },
    },
    {
      key: 'car_model',
      type: 'input',
      templateOptions: {
        label: 'Модель',
        placeholder: 'Введите модель автомобиля',
        required: true,
      },
    },
    {
      key: 'car_year',
      type: 'input',
      templateOptions: {
        label: 'Год выпуска',
        placeholder: 'Введите год выпуска автомобиля',
        required: true,
      },
    },
    {
      key: 'pts_issue_year',
      type: 'input',
      templateOptions: {
        label: 'ПТС',
        placeholder: 'Введите год выпуска автомобиля из ПТС',
        required: true,
      },
    },
    {
      key: 'engine_capacity',
      type: 'input',
      templateOptions: {
        label: 'Объем двигателя',
        placeholder: 'Введите объем двигателя автомобиля',
        required: true,
      },
    },
    {
      className: 'car-info-container__details__form__item',
      key: 'transmission',
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
      className:
        'car-info-container__details__form__item car-info-container__details__form__item__radio',
      key: 'car_body_type',
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
      className:
        'car-info-container__details__form__item car-info-container__details__form__input',
      key: 'car_price',
      type: 'input',
      templateOptions: {
        label: 'Стоимость авто, руб',
        placeholder: 'Введите стоимость автомобиля',
        required: true,
      },
    },
    {
      className: 'car-info-container__details__form__item',
      key: 'car_price',
      type: 'slider',
      templateOptions: {
        min: 0,
        max: 7000000,
        step: 1,
      },
    },
    {
      className: 'car-info-container__details__form__item',
      key: 'car_telematic',
      type: 'toggle',
      templateOptions: {
        label: 'Телематическая система',
        required: true,
      },
    },
  ];

  public calculationSteps: any = [
    { content: 'Информация об автомобиле', path: 'car_info' },
    { content: 'Собственник', path: 'owner' },
    { content: 'Водители', path: 'driver' },
    { content: 'Параметры кредита', path: 'loan_params' },
    { content: 'Параметры страховых продуктов', path: 'insurenses_params' },
    { content: 'Расчет продуктов', path: 'product_calculation' },
  ];

  public processingSteps: any = [
    { content: 'Личная информация', path: 'user_info' },
    { content: 'Работа', path: 'work' },
    { content: 'Сводка', path: 'summary' },
    { content: 'Одобрение', path: 'access' },
  ];

  public insuranceCardsObjects: Object = [
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

  public insuranceOptions: Object = [
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
