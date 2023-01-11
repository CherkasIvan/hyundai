import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { DocumentsInterface } from '../../models/interfaces/documents.interface';

@Component({
  selector: 'tes-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.scss'],
})
export class DocumentsComponent implements OnInit {
  @Input() public document!: DocumentsInterface | any;
  @Input() public cascoStatus!: DocumentsInterface | any;

  @Output() private saveAgreement: EventEmitter<any> = new EventEmitter<any>();

  constructor() {}

  ngOnInit(): void {}

  onSaveAgreement(): void {
    this.saveAgreement.emit();
  }
}
