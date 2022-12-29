import { Component, OnInit } from '@angular/core';

import { UserAuthService } from './services/user-auth.service';
import { CurrentUserInterface } from './models/interfaces/current-user.interface';

@Component({
  selector: 'app-user-auth-page',
  templateUrl: './user-auth-page.component.html',
  styleUrls: ['./user-auth-page.component.scss'],
})
export class UserAuthPageComponent implements OnInit {
  public initialState!: CurrentUserInterface;
  constructor(private _userAuthService: UserAuthService) {}

  ngOnInit(): void {
    this._userAuthService.userData$.subscribe((el) => {
      this.initialState = el;
    });
  }
}
