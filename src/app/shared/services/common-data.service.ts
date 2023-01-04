import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { filter, map, Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class CommonDataService {
  constructor(private http: HttpClient) {}

  //ONLY DIALER

  // edit client's details
  clientsDetailsBody = {
    clientId: '0b2e7b7d-0387-42bd-aea6-79bc0d9d0eea',
    first_name: 'Михаил112',
    last_name: 'Иванов',
    patronymic: 'Владиславович',
    gender: 1,
    birthdate: '2000-07-12',
    passport_number: '65 11 111111',
    passport_issued_at: '2006-07-12',
    passport_division_code: '661-001',
    residence_address: 'Г. Екатеринбург, ул. Зуброва, д. 75, кв. 58',
    marital_status: 1,
    kids_amount: 2,
    personal_data_policy_confirmation: true,
    email: 'adasdas@asdasd.ru',
  };

  public editClientsDetails(body: any): Observable<any> {
    const httpHeaders: HttpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    const url = environment.apiUrl + '/editClientDetails';

    return this.http
      .post<any>(url, body, { headers: httpHeaders })
      .pipe(tap((response: any) => console.log(response)));
  }

  // get clients body = {} or clientsId
  clientsIds = {
    ids: ['28a34aa8-142d-49ed-9a7b-2cc5a67ea1f7'],
  };

  //create car body = {}
  public createCar(): Observable<any> {
    const httpHeaders: HttpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    const url = environment.apiUrl + '/createCar';

    return this.http
      .post<any>(url, {}, { headers: httpHeaders })
      .pipe(tap((response: any) => console.log(response)));
  }

  //delete car body = carId
  carId = {
    carId: 'a36f724b-d7e5-4a16-b33f-c9b9927c37f3',
  };

  public deleteCar(): Observable<any> {
    const httpHeaders: HttpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    const url = environment.apiUrl + '/deleteClientCar';

    return this.http
      .post<any>(url, this.carId, { headers: httpHeaders })
      .pipe(tap((response: any) => console.log(response)));
  }

  //Edit car details
  editCarBody = {
    carId: 'f96d2547-0c34-48db-9e96-b857a522ff73',
    vin: 'vin1251',
  };

  public editCarDetails(): Observable<any> {
    const httpHeaders: HttpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    const url = environment.apiUrl + '/editCarDetails';

    return this.http
      .post<any>(url, this.editCarBody, { headers: httpHeaders })
      .pipe(tap((response: any) => console.log(response)));
  }

  // get car in use (purchased), body = {}
  public getPurchasedCars(): Observable<any> {
    const httpHeaders: HttpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    const url = environment.apiUrl + '/getPurchasedCars';

    return this.http
      .post<any>(url, {}, { headers: httpHeaders })
      .pipe(tap((response: any) => console.log(response)));
  }

  // get free cars (available to purchase), body = {}
  public getFreeCars(): Observable<any> {
    const httpHeaders: HttpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    const url = environment.apiUrl + '/getAvailableToPurchaseCars';

    return this.http
      .post<any>(url, {}, { headers: httpHeaders })
      .pipe(tap((response: any) => console.log(response)));
  }

  // get client cars, body = {}
  clientCarBody = {
    clientId: '0b2e7b7d-0387-42bd-aea6-79bc0d9d0eea',
  };

  public getClientCars(): Observable<any> {
    const httpHeaders: HttpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    const url = environment.apiUrl + '/getClientCars';

    return this.http
      .post<any>(url, this.clientCarBody, { headers: httpHeaders })
      .pipe(tap((response: any) => console.log(response)));
  }

  // Calculate eOSAGO cost
  eOSAGOCostBody = {
    policyStartDate: '2022-12-30T00:00:00.000+03:00',
    documentType: 'new',
    vehicle: {
      vehicleIdent: {
        vin: 'X7L4SRC9B53513910',
        licensePlate: 'Х992РМ777',
      },
      vehicleDocument: {
        docIssuanceDate: '2018-11-09',
        docType: 31,
        docSeries: '77OM',
        docNumber: '336022',
      },
      brand: 'Renault',
      model: 'Clio 1.6 16V Dynamique',
      modelId: '101000086542',
      releaseYear: 2010,
      horsepower: 128,
      usageAreaCode: '7700000000000',
      useTrailer: 0,
      categoryId: '2',
      markId: '10507',
      typeId: '1',
    },
    owner: {
      personDocumentId:
        '1266e4e553166eba5b59a543b9f4fffad0ad0c41003ebdafb2bff278506730aa',
      personInfo: {
        firstName: 'Михаил',
        middleName: 'Анатольевич',
        lastName: 'Кузнецов',
        birthDate: '1960-11-16',
        sex: 'Male',
      },
      documentInfo: {
        docType: 12,
        docSeries: '4509',
        docNumber: '501977',
        docIssuer: 'МВД РФ',
        docIssuanceDate: '2008-02-16',
        registrationAddress: 'г.Солнечногорск,ул Большевистская,д.2А,кв.24',
        registrationAddressCode: '77000000000124200',
      },
    },
    offline: false,
    insurant: {
      personDocumentId:
        'aa05cda4955da9d2bdce636db0cd84edba3ea6d3596e96d094af4d05d85bfc90',
      personInfo: {
        firstName: 'Михаил',
        middleName: 'Анатольевич',
        lastName: 'Кузнецов',
        birthDate: '1960-11-16',
      },
      documentInfo: {
        docType: 12,
        docSeries: '4509',
        docNumber: '501977',
        docIssuer: 'МВД РФ',
        docIssuanceDate: '2008-02-16',
        registrationAddress: 'г Солнечногорск, ул Большевистская, д 2А, кв24',
        registrationAddressCode: '77000000000124200',
      },
    },
    drivers: [
      {
        personDocumentId: '046d7d0f0d224cd995647353c879f588',
        personInfo: {
          firstName: 'Белов',
          middleName: 'Илья',
          lastName: 'Сергеевич',
          birthDate: '1983-06-05',
        },
        documentInfo: {
          driverExperienceStartDate: '2008-11-26',
          docType: 21,
          docSeries: '78ХВ',
          docNumber: '052265',
        },
      },
    ],
  };

  public сalculateEosagoCost(): Observable<any> {
    const httpHeaders: HttpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    const url =
      environment.apiUrl +
      '/calculateKbm?user=5043c2bd04614726ab79a1c08a7fcd7cce3d445d5af44e54be7e5499d0ba826f';

    return this.http
      .post<any>(url, this.eOSAGOCostBody, { headers: httpHeaders })
      .pipe(tap((response: any) => console.log(response)));
  }

  //create eOSAGO
  eOSAGOBody = {
    phone: '79043525770',
    email: 'tnntstr@tnntstr.ru',
  };

  public createEosago(): Observable<any> {
    const httpHeaders: HttpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    const url =
      environment.apiUrl +
      '/createKbm?request_id=9cb0dd4916d7410b8b96c9ae5f074b9843ed681b26ff4fd090951f9c3102a74e&user=5043c2bd04614726ab79a1c08a7fcd7cce3d445d5af44e54be7e5499d0ba826f';

    return this.http
      .post<any>(url, this.eOSAGOBody, { headers: httpHeaders })
      .pipe(tap((response: any) => console.log(response)));
  }

  // Check policy calculation status
  public checkPolicyCalculationStatus(): Observable<any> {
    const url =
      environment.apiUrl +
      '/checkPolicyStatus?request_id=9cb0dd4916d7410b8b96c9ae5f074b9843ed681b26ff4fd090951f9c3102a74e';

    return this.http
      .get<any>(url)
      .pipe(tap((response: any) => console.log(response)));
  }

  //Check policy creation status
  public checkPolicyCreationStatus(): Observable<any> {
    const url =
      environment.apiUrl +
      '/checkPolicyCreationStatus?request_id=1ef3edf4335f46e99bea6446829fbdc990593a07942a434689e302c03303b95d';

    return this.http
      .get<any>(url)
      .pipe(tap((response: any) => console.log(response)));
  }

  //showAnketa
  showAnketaBody = {
    policyCalculationId:
      'a2d10388e76a406d8669cee0e1c3e54321babd354f4e4b598f74bc8eaf7a14bc',
    policyNumber: '1234567890',
  };

  public showAnketaEosago(): Observable<any> {
    const httpHeaders: HttpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    const url = environment.apiUrl + '/showAnketa';

    return this.http
      .post<any>(url, this.showAnketaBody, { headers: httpHeaders })
      .pipe(tap((response: any) => console.log(response)));
  }

  //payPolicy
  payPolicyBody = {
    policyCalculationId:
      'a2d10388e76a406d8669cee0e1c3e54321babd354f4e4b598f74bc8eaf7a14bc',
    policyNumber: '1234567890',
    successPaymentUrl: 'https://sovcombank.ru/',
    failurePaymentUrl: 'https://sovcombank.ru/cards',
  };

  public payPolicyEosago(): Observable<any> {
    const httpHeaders: HttpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    const url = environment.apiUrl + '/payPolicy';

    return this.http
      .post<any>(url, this.payPolicyBody, { headers: httpHeaders })
      .pipe(tap((response: any) => console.log(response)));
  }

  //showPolicy
  showPolicyBody = {
    policyCalculationId:
      'a2d10388e76a406d8669cee0e1c3e54321babd354f4e4b598f74bc8eaf7a14bc',
    policyNumber: '1234567890',
  };

  public showPolicyEosago(): Observable<any> {
    const httpHeaders: HttpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    const url = environment.apiUrl + '/showPolicy';

    return this.http
      .post<any>(url, this.showPolicyBody, { headers: httpHeaders })
      .pipe(tap((response: any) => console.log(response)));
  }

  // showpdfPolicy
  showpdfPolicyBody = {
    policyCalculationId:
      'a2d10388e76a406d8669cee0e1c3e54321babd354f4e4b598f74bc8eaf7a14bc',
    policyNumber: '1234567890',
  };

  public showpdfPolicyEosago(): Observable<any> {
    const httpHeaders: HttpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    const url = environment.apiUrl + '/showpdfPolicy';

    return this.http
      .post<any>(url, this.showPolicyBody, { headers: httpHeaders })
      .pipe(tap((response: any) => console.log(response)));
  }

  // Calculate preliminary cost CASKO
  calculatePreliminaryCostCaskoBody = {
    new_car: false,
    region: 78,
    gender: 'male',
  };

  public CalculatePreliminaryCostCasko(): Observable<any> {
    const httpHeaders: HttpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    const url =
      environment.apiUrl +
      '/calculateCasco?customer_id=f6329f12-85eb-46e5-b07e-1d41da8ae5d3';

    return this.http
      .post<any>(url, this.calculatePreliminaryCostCaskoBody, {
        headers: httpHeaders,
      })
      .pipe(tap((response: any) => console.log(response)));
  }

  //Get calculation params Casko
  public getCalculationParamsCasko(): Observable<any> {
    const url = environment.apiUrl + '/createCasco?calculation_id=449777684';

    return this.http
      .get<any>(url)
      .pipe(tap((response: any) => console.log(response)));
  }

  //Start CASCO offer creation
  startCascoOfferCreationBody = {
    start_date: '2022.12.30 10:30:00',
    reimbursement_id: 2,
    franchise_id: 0,
  };

  public startOfferCreationCasko(): Observable<any> {
    const httpHeaders: HttpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    const url = environment.apiUrl + '/createCasco?calculation_id=449778731';

    return this.http
      .post<any>(url, this.startCascoOfferCreationBody, {
        headers: httpHeaders,
      })
      .pipe(tap((response: any) => console.log(response)));
  }

  //Attach files to CASCO

  attachFilesToCASCOBody = {
    policy_id: '29616655',
    partner_pin: 'cartest',
    doc_type_id: '2',
    object_type_id: '10',
    object_id: '2345973',
  };

  public attachFilesToCasko(): Observable<any> {
    const httpHeaders: HttpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    const url = environment.apiUrl + '/attachFilesToCasco';

    return this.http
      .post<any>(url, this.attachFilesToCASCOBody, { headers: httpHeaders })
      .pipe(tap((response: any) => console.log(response)));
  }

  //Start CASCO booking

  startCascoBookingBody = {
    new_car: false,
    region: 78,
    gender: 'male',
  };

  public startCaskoBooking(): Observable<any> {
    const httpHeaders: HttpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    const url = environment.apiUrl + '/startCascoBooking?policy_id=29616655';

    return this.http
      .post<any>(url, this.startCascoBookingBody, { headers: httpHeaders })
      .pipe(tap((response: any) => console.log(response)));
  }

  //Check CASCO status

  public checkCaskoStatus(): Observable<any> {
    const url = environment.apiUrl + '/checkCascoStatus?policy_id=29616655';

    return this.http
      .get<any>(url)
      .pipe(tap((response: any) => console.log(response)));
  }

  //Get final CASCO calculation

  public getFinalCaskoCalculation(): Observable<any> {
    const url =
      environment.apiUrl + '/getFinalCascoCalculation?policy_id=29616655';

    return this.http
      .get<any>(url)
      .pipe(tap((response: any) => console.log(response)));
  }

  //Issue policy

  issuePolicyCaskoBody = {
    policy_id: '29616655',
  };

  public issuePolicyCasko(): Observable<any> {
    const httpHeaders: HttpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    const url = environment.apiUrl + '/issueCasco?policy_id=29616655';

    return this.http
      .post<any>(url, this.startCascoBookingBody, { headers: httpHeaders })
      .pipe(tap((response: any) => console.log(response)));
  }

  //add car

  addCarBody = {
    vin: 'CC123456778A99',
    car_mark: 'Hyundai',
    car_model: 'Solaris',
    car_year: 2020,
    engine_capacity: '2.0',
    transmission: 'Автоматическая',
    car_price: 1200000,
    pts_issue_year: 2020,
    car_body_type: 'Седан',
    car_telematic: false,
  };

  public addCar(): Observable<any> {
    const httpHeaders: HttpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    const url =
      environment.apiUrl +
      '/carInfo?owner_id=f6329f12-85eb-46e5-b07e-1d41da8ae5d3';

    return this.http
      .post<any>(url, this.addCarBody, { headers: httpHeaders })
      .pipe(tap((response: any) => console.log(response)));
  }

  //Update car info
  updateCarInfoBody = {
    vin: '000000000000',
  };

  public updateCarInfo(): Observable<any> {
    const httpHeaders: HttpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    const url =
      environment.apiUrl +
      '/carInfo?owner_id=f6329f12-85eb-46e5-b07e-1d41da8ae5d3&car_id=1';

    return this.http
      .post<any>(url, this.updateCarInfoBody, { headers: httpHeaders })
      .pipe(tap((response: any) => console.log(response)));
  }

  //Delete car!!!!
  public deleteDialerCar(): Observable<any> {
    const httpHeaders: HttpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    const url =
      environment.apiUrl +
      '/carInfo?owner_id=f6329f12-85eb-46e5-b07e-1d41da8ae5d3&car_id=1';

    return this.http
      .delete<any>(url)
      .pipe(tap((response: any) => console.log(response)));
  }

  //Get customer cars
  public getCustomerCars(): Observable<any> {
    const url =
      environment.apiUrl +
      '/carInfo?owner_id=f6329f12-85eb-46e5-b07e-1d41da8ae5d3';

    return this.http
      .get<any>(url)
      .pipe(tap((response: any) => console.log(response)));
  }

  //Add driver

  addDriverBody = {
    driver_full_name: 'Иванов Иван Иванович',
    driver_phone_number: '+7 966 000 09 09',
    driver_birth_date: '1989-11-27',
    driver_licence_number: '1234 12345678',
    driver_licence_issued_by: 'ГИБДД 6421',
    driver_licence_issued_date: '2019-06-21',
    driver_exp_start: '2019-06-21',
  };

  public addDriver(): Observable<any> {
    const httpHeaders: HttpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    const url =
      environment.apiUrl +
      '/driverInfo?customer_id=f6329f12-85eb-46e5-b07e-1d41da8ae5d3';

    return this.http
      .post<any>(url, this.addDriverBody, { headers: httpHeaders })
      .pipe(tap((response: any) => console.log(response)));
  }

  //Update driver info
  updateDriverInfoBody = {
    driver_full_name: 'Иванов Иван Игнатьевич',
  };
}
