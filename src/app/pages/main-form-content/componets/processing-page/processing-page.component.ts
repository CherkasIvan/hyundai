import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-processing-page',
  templateUrl: './processing-page.component.html',
  styleUrls: ['./processing-page.component.scss'],
})
export class ProcessingPageComponent implements OnInit {
  public processingSteps = [
    {content: 'Личная информация'},
    {content: 'Работа'},
    {content: 'Сводка'},
    {content: 'Одобрение'},
  ];

  constructor() {}

  ngOnInit(): void {}
}
