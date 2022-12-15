import { MenuItem } from './menu.interface';

export const MAIN_MENU: MenuItem[] = [
  {
    routes: ['/loan-calculation'],
    name: 'Расчет кредита',
    disable: false,
    children: [],
  },
  {
    routes: ['/processing'],
    name: 'Оформление',
    disable: false,
    children: [],
  },
  {
    routes: ['/documents-payments'],
    name: 'Документы и платежи',
    disable: false,
    children: [],
  }
];
