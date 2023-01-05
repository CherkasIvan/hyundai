import { Component, OnDestroy, OnInit } from '@angular/core';

import { Subscription } from 'rxjs';

import { UserAuthService } from '../user-filter-page/services/user-auth.service';

import { CurrentUserInterface } from './models/interfaces/current-user.interface';

@Component({
  selector: 'tes-user-auth-page',
  templateUrl: './user-auth-page.component.html',
  styleUrls: ['./user-auth-page.component.scss'],
})
export class UserAuthPageComponent implements OnInit, OnDestroy {
  public initialState!: CurrentUserInterface;

  public userAuthPageSub$: Subscription = new Subscription();

  constructor(private _userAuthService: UserAuthService) {}

  ngOnInit(): void {
    this.userAuthPageSub$.add(
      this._userAuthService.userData$.subscribe((el) => {
        this.initialState = el;
      })
    );
  }

  ngOnDestroy(): void {
    this.userAuthPageSub$.unsubscribe();
  }
}
