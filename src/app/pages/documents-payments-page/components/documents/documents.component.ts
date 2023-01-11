import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { ImagePickerConf } from 'ngp-image-picker';
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

  public config: ImagePickerConf = {
    width: '93px',
    height: '93px',
    language: 'en',
    hideDeleteBtn: true,
    hideDownloadBtn: true,
    hideEditBtn: true,
    hideAddBtn: true,
  };
  // public initialImage = '/assets/images/documents-page-icons/pdf-default-logo.png';

  constructor() {}

  ngOnInit(): void {
    console.log(this.document);
  }

  onSaveAgreement(): void {
    this.saveAgreement.emit();
  }
}
