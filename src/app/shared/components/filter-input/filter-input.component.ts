import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { GetUsersService } from '../../../auth/user-filter-page/services/get-users.service';

@Component({
  selector: 'tes-filter-input',
  templateUrl: './filter-input.component.html',
  styleUrls: ['./filter-input.component.scss'],
})
export class FilterInputComponent implements OnInit {
  public searchForm!: FormGroup;
  public searchValue!: string;

  public initializeForm(): void {
    this.searchForm = this._fb.group({
      searchFormInput: '',
    });
  }

  constructor(
    private _fb: FormBuilder,
    private _getUserService: GetUsersService
  ) {}

  ngOnInit(): void {
    this.initializeForm();
  }

  public onSearchValue(event: Event) {
    if (event.target) {
      this.searchValue = (event.target as HTMLInputElement).value;
      this._getUserService.searchClient(this.searchValue);
    }
  }
}
