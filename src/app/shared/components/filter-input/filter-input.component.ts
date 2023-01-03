import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { BehaviorSubject, Observable } from 'rxjs';
import { ClientDataService } from '../../services/client-data.service';

@Component({
  selector: 'app-filter-input',
  templateUrl: './filter-input.component.html',
  styleUrls: ['./filter-input.component.scss'],
})
export class FilterInputComponent implements OnInit {
  public initialCounter$!: Observable<number>;
  @Output() public currentSearchValue = new EventEmitter<string>();


  public searchForm!: FormGroup;
  public searchValue!: string

  public initializeForm(): void {
    this.searchForm = this._fb.group({
      searchFormInput: '',
    });
  }

  constructor(private _fb: FormBuilder,
              private clientDataService: ClientDataService) {}

  ngOnInit(): void {
    this.initializeForm();
  }

  public onSearchValue(event: Event) {
    if (event.target) {
      this.searchValue = (event.target as HTMLInputElement).value;
      this.clientDataService.searchClient(this.searchValue);
      // this.currentSearchValue.emit(this.searchValue);
      // this.currentSearchValue$.next(this.searchValue);
    }
  }
}
