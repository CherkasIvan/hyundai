import { Component, OnInit } from '@angular/core';
import { MockDataService } from 'src/app/shared/services/mock-data.service';

@Component({
  selector: 'app-documents-payments-page',
  templateUrl: './documents-payments-page.component.html',
  styleUrls: ['./documents-payments-page.component.scss'],
})
export class DocumentsPaymentsPageComponent implements OnInit {
  public currentDocuments: any = [];
  constructor(private mockDataService: MockDataService) {}

  ngOnInit(): void {
    this.currentDocuments = this.mockDataService.documentsPayments;
  }
}
