import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { GetCascoPoliciesBody, GetCascoResponse, CascoObject } from '../models/interfaces/casco';
import { delay, map, Observable, of } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({ providedIn: 'root' })
export class CalculationLoanService {
  constructor(private http: HttpClient) {
  }

  public getCascoPolicies(body: GetCascoPoliciesBody, client_id: string, car_id?: string): Observable<GetCascoResponse> {
    const url = environment.apiUrl + '/calculateCasco';
    const params = {
      client_id,
      car_id: car_id ? car_id : 'dd55f116-cd8a-4e52-9b0c-3538f05d5977',
    };

    return this.http.post<GetCascoResponse>(url, body, { params }).pipe(
      map(cascoObj => {
        return cascoObj = {
          ...cascoObj,
          product: 'КАСКО',
          credit: true,
          provider: 'sovkom',
          description: 'Some description',
        };
      }),
    );
    // return of(this.getMockCascoPolicies(body)).pipe(delay(1000));
  }

  private getMockCascoPolicies(params: GetCascoPoliciesBody): GetCascoResponse {
    return mockCascoPolicies;
  }

  public createCascoPolicy(body: any, calculation_id: string): Observable<any> {
    const url = environment.apiUrl + '/createCasco';
    body = {
      policyStartDate: '2023-01-15T00:00:00.000+03:00',
      policyEndDate: '2024-01-14T00:00:00.000+03:00',
      options: [
        // {
        //   option_id: 388,
        //   option_group_id: 4,
        //   option_group_required: 4,
        //   option_group_ex: 4,
        //   option_number: 4,
        //   option_name: 'Пробег',
        //   risk_id: 1,
        //   possible_value: 1,
        // },
      ],
    };
    const params = { calculation_id };

    return this.http.post<any>(url, body, { params });
  }

  public attachFilesToCasco(body: any, calculation_id: string): Observable<any> {
    const url = environment.apiUrl + '/attachFilesToCasco';
    const params = { calculation_id };

    return this.http.post<any>(url, body, { params });
  }

  public startCascoBooking(body: any, calculation_id: string): Observable<any> {
    const url = environment.apiUrl + '/start-casco-booking';
    const params = { calculation_id };

    return this.http.post<any>(url, body, { params });
  }

  public checkCascoStatus(calculation_id: string): Observable<any> {
    const url = environment.apiUrl + '/checkCascoStatus';
    const params = { calculation_id };

    return this.http.get<any>(url, { params });
  }

  public issueCascoPolicy(calculation_id: string): Observable<any> {
    const url = environment.apiUrl + '/issueCasco';
    const params = { calculation_id };

    return this.http.post<HttpResponse<any>>(url, {}, { params, observe: 'response' });
  }

  public getCascoDocuments(calculation_id: string): Observable<any> {
    const url = environment.apiUrl + '/getCascoDocuments';
    const params = { calculation_id };

    return this.http.get<any>(url, { params });
  }
}

const mockCascoPolicies: CascoObject =
  {
    product: 'КАСКО',
    credit: true,
    provider: 'sovkom',
    description: 'Some description',
    calculation_id: '592e9e68-1787-418d-b40c-2450839501e0',
    total_summ: 51730,
    options: {
      default: [
        {
          option_id: 388,
          option_group_id: 4,
          option_group_required: 4,
          option_group_ex: 4,
          option_number: 4,
          option_name: 'Пробег',
        },
      ],
      available: {
        option: [
          {
            option_id: 31,
            option_name: 'Угон или кража ЗТС с ключами',
            risk_id: 3,
            option_group_id: 0,
            group_option_required: false,
            group_option_ex: false,
            option_number: 4,
            description: 'Стороны договорились:  \r\n\t1) установить единую страховую сумму по случаям, указанным в пп. 5.3.1. и 5.3.2. Правил страхования, равную стоимости ЗТС (с учетом смонтированного на ЗТС дополнительного оборудования и затрат на его установку) в месте его нахождения на день заключения договора страхования; \r\n\t2) пп. 11.24.3.5. Правил страхования  изложить  в следующей редакции: «оставшиеся в распоряжении Страхователя (Выгодоприобретателя) комплекты оригинальных ключей от замка зажигания, багажника, любых дверей, любых люков ЗТС, которыми ЗТС было оснащено»;\r\n\t3) пп. 11.24.3.6. Правил страхования  изложить  в следующей редакции: «оставшиеся в распоряжении Страхователя (Выгодоприобретателя) комплекты любых активных или пассивных активаторов, любых средств поиска или противодействия хищению (угону) ЗТС (ключей, пультов управления, брелоков, карточек, меток-транспондеров и т.п.), которыми было оснащено ЗТС».',
          },
          {
            option_id: 33,
            option_name: 'Хищение / повреждение колес',
            risk_id: 1,
            option_group_id: 0,
            group_option_required: false,
            group_option_ex: false,
            option_number: 5,
            description: 'Стороны договорились отменить ограничение по хищению или непосредственному (преднамеренному или неосторожному) повреждению колес третьими лицами, изменив Договор страхования следующим образом: \r\n\t1) подпункт 12.2.2.15 Правил страхования дополнить следующим примечанием: «Примечание к подпункту 12.2.2.15: исключение не применяется при условии, что покрышки и/или колесные диски повреждены/похищены третьими лицами, и Страхователь выполнил обязанности, предусмотренные пунктами 11.2.2 и 11.2.3. настоящих Правил»;\r\n\t2)   При хищении или повреждении колес размер страхового возмещения определяется в соответствии с подпунктом 11.16.1.6. Правил страхования. При этом если при заключении (в период действия) настоящего Договора составлялся Акт осмотра ЗТС, то размер страхового возмещения не может превышать стоимости покрышек и/или колесных дисков, аналогичных тем, которые были указаны в Акте осмотра, и не может превышать стоимости покрышек и/или колесных дисков, которые фактически были установлены на ЗТС в момент страхового случая. \r\n    Если при заключении (в период действия) настоящего Договора Акт осмотра ЗТС не составлялся, страховое возмещение выплачивается в размере стоимости предусмотренных штатной комплектацией ЗТС (проверяется по VIN номеру ЗТС) покрышек и/ или колесных дисков, на дату страхового случая.',
          },
          {
            option_id: 38,
            option_name: 'Территория страхования',
            risk_id: 1,
            option_group_id: 0,
            group_option_required: false,
            group_option_ex: false,
            option_number: 3,
            description: 'Стороны договорились изменить Договор страхования, дополнив пункт 4.4. Правил страхования следующим положением: «Территорией страхования по риску «Ущерб» также является территория стран Европы»',
          },
          {
            option_id: 44,
            option_name: 'Территория страхования (Казахстан и КНР)',
            risk_id: 1,
            option_group_id: 0,
            group_option_required: false,
            group_option_ex: false,
            option_number: 15,
            description: 'Стороны договорились изменить Договор страхования, дополнив пункт 4.4. Правил страхования следующим положением: «Территорией страхования по риску «Ущерб» также является территория Китая и Казахстана».',
          },
          {
            option_id: 41,
            option_name: 'Выплата без справок. Вариант 4',
            risk_id: 1,
            option_group_id: 1,
            group_option_required: false,
            group_option_ex: true,
            option_number: 12,
            description: 'Стороны договорились изменить Договор страхования, изложив подпункт 11.10.5 Правил страхования в следующей редакции:\r\nПовреждение:\r\n\t-элементов остекления салона (включая стеклянные вставки, применяемые в конструкции панорамных крыш, и стеклянный люк крыши), фар и фонарей (включая указатели поворотов, повторители поворотов, фонари габаритных огней), зеркальных вставок боковых зеркал заднего вида – возмещается без ограничений по количеству страховых случаев;\r\n\t-одного кузовного элемента (без учета скрытых дефектов) – возмещается один раз  за период действия Договора страхования;\r\n\t-электропроводки грызунами - возмещается один раз  за период а действия Договора страхования.\r\nПримечание: «Одним кузовным элементом» признается один элемент штатной комплектации ЗТС (устанавливается по VIN-номеру), а именно:\r\n\t-внешний элемент кузова (крыло, крыло с люком бензобака, боковина (заднее крыло), порог, панель двери, панель крыши, внешняя панель люка крыши, капот, крышка багажника),\r\n\t-пластиковый, резиновый элемент внешней декоративной отделки или безопасности кузова (молдинг, расширитель, накладка),\r\n\t-внешний элемент (накладка) бампера переднего, внешний элемент (накладка) бампера заднего, накладка (молдинг) стекла, спойлер, спойлер бампера,\r\n\t-решетка (облицовка) радиатора, эмблема,\r\n\t-корпус боковых зеркал заднего вида в сборе (включая кронштейн, кожух, при наличии - мотор регулировки угла обзора и другие устройства, предусмотренные заводом изготовителем ТС).',
          },
          {
            option_id: 42,
            option_name: 'Выплата без справок. Вариант 5',
            risk_id: 1,
            option_group_id: 1,
            group_option_required: false,
            group_option_ex: true,
            option_number: 13,
            description: 'Стороны договорились  изменить Договор страхования, изложив подпункт 11.10.5. Правил страхования в следующей редакции:\r\nПри повреждении следующих элементов ЗТС:\r\n\t-кузовных элементов, элементов остекления салона (включая стеклянные вставки, применяемые в конструкции панорамных крыш, и стеклянный люк крыши); \r\n\t-фар и фонарей (включая указатели поворотов, повторители поворотов, фонари габаритных огней); \r\n\t-боковых зеркал заднего вида в сборе;\r\n\t-электропроводки грызунами;\r\n\t-штатных наружных элементов;\r\n\t-наружных элементов дополнительного оборудования, застрахованного по риску «Повреждение/утрата дополнительного оборудования» (за исключением покрышек, колесных дисков, декоративных колпаков на колесах, грязезащитных брызговиков, щеток-стеклоочистителей),\r\nвозмещение производится не более двух раз за период действия Договора страхования. \r\nПри этом размер возмещения по каждому страховому случаю не будет превышать 3% от страховой суммы, установленной по риску «Ущерб» и указанной в разделе 6 Полиса.',
          },
          {
            option_id: 388,
            option_name: 'Пробег',
            risk_id: 1,
            option_group_id: 4,
            group_option_required: true,
            group_option_ex: true,
            option_number: 22,
            possible_values: {
              possible_value: [
                {
                  name: 5000,
                  value: 1,
                },
                {
                  name: 10000,
                  value: 2,
                },
                {
                  name: 15000,
                  value: 3,
                },
              ],
            },
          },
          {
            option_id: 43,
            option_name: 'Возмещение полной стоимости',
            risk_id: 1,
            option_group_id: 0,
            group_option_required: false,
            group_option_ex: false,
            option_number: 14,
            description: 'Стороны договорились производить расчет страхового возмещения в случае хищения (угона) или полной гибели ЗТС без учета амортизационного износа и читать пункт 11.8. Правил страхования в следующей редакции:\r\n«В период действия договора страхования амортизационный износ не начисляется (показатель износа равен 0%).»',
          },
        ],
      },
    },
  };
