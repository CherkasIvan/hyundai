import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tes-approval',
  templateUrl: './approval.component.html',
  styleUrls: ['./approval.component.scss'],
})
export class ApprovalComponent implements OnInit {
  public approvalTitle: string = 'Кредит';
  constructor() {}

  ngOnInit(): void {}
}
