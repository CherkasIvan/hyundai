import { Component, OnInit } from '@angular/core';

import { MockDataService } from '../../shared/services/mock-data.service';

import { DocumentsInterface } from './models/interfaces/documents.interface';

@Component({
  selector: 'tes-documents-payments-page',
  templateUrl: './documents-payments-page.component.html',
  styleUrls: ['./documents-payments-page.component.scss'],
})
export class DocumentsPaymentsPageComponent implements OnInit {
  public documentsTitle: string = 'Документы';
  public currentDocuments: DocumentsInterface[] = [];
  constructor(private _mockDataService: MockDataService) {}

  ngOnInit(): void {
    this.currentDocuments = this._mockDataService.documentsPayments;
  }
}
