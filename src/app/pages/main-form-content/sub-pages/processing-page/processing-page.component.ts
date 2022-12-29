import {Component, OnInit} from '@angular/core';
import { MockDataService } from '../../../../shared/services/mock-data.service';

@Component({
  selector: 'app-processing-page',
  templateUrl: './processing-page.component.html',
  styleUrls: ['./processing-page.component.scss'],
})
export class ProcessingPageComponent implements OnInit {
  public processingSteps: object[] = [];

  constructor(private mockDataService: MockDataService) {}

  ngOnInit(): void {
    this.processingSteps = this.mockDataService.processingSteps;
  }
}
