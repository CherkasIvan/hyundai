import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { Observable } from 'rxjs';

@Component({
  selector: 'app-filter-input',
  templateUrl: './filter-input.component.html',
  styleUrls: ['./filter-input.component.scss'],
})
export class FilterInputComponent implements OnInit {
  public initialCounter$!: Observable<number>;
  @Output() public currentCountValue = new EventEmitter<number>();

  public searchForm!: FormGroup;

  public initializeForm(): void {
    this.searchForm = this._fb.group({
      counterFormInput: 0,
    });
  }

  constructor(private _fb: FormBuilder) {}

  ngOnInit(): void {
    this.initializeForm();
  }
}
