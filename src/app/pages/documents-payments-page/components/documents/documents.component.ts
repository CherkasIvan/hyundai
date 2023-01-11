import { Component, Input, OnInit } from '@angular/core';

import { ImagePickerConf } from 'ngp-image-picker';

import { DocumentsInterface } from '../../models/interfaces/documents.interface';

@Component({
  selector: 'tes-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.scss'],
})
export class DocumentsComponent implements OnInit {
  @Input() public document!: DocumentsInterface;

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

  public onImageChange(e: any) {
    // console.log(e);
  }
  constructor() {}

  ngOnInit(): void {
    console.log(this.document);
  }

  // public mouseEnter() {
  //   (this.config.hideDeleteBtn = false),
  //     (this.config.hideDownloadBtn = false),
  //     (this.config.hideEditBtn = false),
  //     (this.config.hideAddBtn = false);
  // }
  // public mouseLeave() {
  //   (this.config.hideDeleteBtn = true),
  //     (this.config.hideDownloadBtn = true),
  //     (this.config.hideEditBtn = true),
  //     (this.config.hideAddBtn = true);
  // }
}
