import { Component, OnDestroy, OnInit } from '@angular/core';

import { MockDataService } from '../../shared/services/mock-data.service';

import { DocumentsInterface } from './models/interfaces/documents.interface';
import { CalculationLoanService } from '../../shared/services/calculation-loan.service';
import { filter, map, Observable, of, repeat, Subject, switchMap, take, takeUntil } from 'rxjs';

@Component({
  selector: 'tes-documents-payments-page',
  templateUrl: './documents-payments-page.component.html',
  styleUrls: ['./documents-payments-page.component.scss'],
})
export class DocumentsPaymentsPageComponent implements OnInit, OnDestroy {
  public currentDocuments: DocumentsInterface[] | any = [];
  public cascoStatus!: string;

  public cascoIsApplied!: boolean;

  private checkCascoStatus$!: Observable<any>;
  private getCascoDocuments$!: Observable<any>;

  private _unsubscribeAll: Subject<void> = new Subject();

  constructor(
    private _mockDataService: MockDataService,
    private calculateLoanService: CalculationLoanService,
  ) {
  }

  ngOnInit(): void {
    if (localStorage.getItem('createdCascoOffers')) {
      this.currentDocuments =
        [JSON.parse(localStorage.getItem('createdCascoOffers') as string)];
    }

    this.attachFilesAndStartBooking();

    this.checkCascoStatus$ = this.calculateLoanService.checkCascoStatus(
      localStorage.getItem('calculation_id') as string,
    ).pipe(
      repeat({ delay: 60000 }),
      filter((data: any) => {
          if (data.message.status === 'Не действует (Согласован)') {
            this.cascoIsApplied = true;
            return true;
          } else if (data.message.status === 'Аннулирован (Аннулирован)') {
            this.cascoIsApplied = false;
            return true;
          }

          this.cascoIsApplied = false;
          return false;
        },
      ),
      take(1),
      takeUntil(this._unsubscribeAll),
    );

    this.getCascoDocuments$ = this.calculateLoanService
      .getCascoDocuments(localStorage.getItem('calculation_id') as string)
      .pipe(
        map(data => {
          if (this.currentDocuments[0].document_list.length === 2) {
            data.links.forEach((item: any) => {
              this.currentDocuments[0].document_list.push(
                {
                  documentTypeName: item.name,
                  url: item.link,
                },
              );
            });

            this.currentDocuments[0].document_list[2].documentTypeName = data.links[0].name;
            this.currentDocuments[0].document_list[2].url = data.links[0].link;
            this.currentDocuments[0].document_list[3].documentTypeName = data.links[1].name;
            this.currentDocuments[0].document_list[3].url = data.links[1].link;
          }
        }),
        takeUntil(this._unsubscribeAll),
      );

    this.issueCascoPolicy(); // remove when we will start to get right status from the checkCascoStatus query
  }

  attachFilesAndStartBooking(): void {
    this.currentDocuments[0].document_list.forEach((item: any, i: number) => {
      this.currentDocuments[0].document_list[i] = {
        ...this.currentDocuments[0].document_list[i],
        file_type: 'image/png',
        file: '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',
      };
      delete this.currentDocuments[0].document_list[i].doc_status;
      delete this.currentDocuments[0].document_list[i].is_doc_send;
      delete this.currentDocuments[0].document_list[i].objectDescription;
    });

    console.log(this.currentDocuments[0].document_list);
    const body = this.currentDocuments[0].document_list;

    this
      .calculateLoanService
      .attachFilesToCasco(body, localStorage.getItem('calculation_id') as string)
      .pipe(
        map(data => {
            console.log(data);
            return data.status === 'Файлы загружены';
          },
        ),
        switchMap(() =>
          this.calculateLoanService
            .startCascoBooking(
              {},
              localStorage.getItem('calculation_id') as string)),
        switchMap(() => of(this.checkCascoStatus$.subscribe(result => console.log(result)))),
        takeUntil(this._unsubscribeAll),
      )
      .subscribe(r => this.checkCascoStatus$.subscribe(result => console.log(result)));
  }

  issueCascoPolicy(): void {
    this.calculateLoanService
      .issueCascoPolicy(localStorage.getItem('calculation_id') as string)
      .pipe(
        map(data => {
          console.log(data.body, data.status);
          switch (data.status) {
            case 200:
              this.cascoStatus = 'Не действует (Расчет)';
              break;
            case 201:
              this.cascoStatus = 'Не действует (Согласован)';
              break;
            case 400:
              this.cascoStatus = 'Аннулирован (Отказ)';
              break;
          }
        }),
        switchMap(() => of(this.getCascoDocuments$.subscribe())),
        takeUntil(this._unsubscribeAll),
      )
      .subscribe();
  }

  ngOnDestroy(): void {
    this._unsubscribeAll.next();
    this._unsubscribeAll.complete();
  }
}
