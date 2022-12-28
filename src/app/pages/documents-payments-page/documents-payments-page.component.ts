import { Component, OnInit } from '@angular/core';

import { MockDataService } from '../../shared/services/mock-data.service';

import { DocumentsInterface } from './types/documents.interface';

@Component({
  selector: 'app-documents-payments-page',
  templateUrl: './documents-payments-page.component.html',
  styleUrls: ['./documents-payments-page.component.scss'],
})
export class DocumentsPaymentsPageComponent implements OnInit {
  public currentDocuments: DocumentsInterface[] = [];
  constructor(private _mockDataService: MockDataService) {}

  ngOnInit(): void {
    this.currentDocuments = this._mockDataService.documentsPayments;
  }
}
