import {Component, OnInit} from '@angular/core';

import {ThemePalette} from '@angular/material/core';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss'],
})
export class ProgressBarComponent implements OnInit {
  color: ThemePalette = 'primary';
  mode: any = 'determinate';
  value: number = 50;
  bufferValue = 75;

  constructor() {}
  ngOnInit(): void {}
}
