import { Component, OnInit } from '@angular/core';
import { UserAuthService } from './services/user-auth.service';

@Component({
  selector: 'app-user-auth-page',
  templateUrl: './user-auth-page.component.html',
  styleUrls: ['./user-auth-page.component.scss'],
})
export class UserAuthPageComponent implements OnInit {
  public initialState: any;
  constructor(public userAuthService: UserAuthService) {}

  ngOnInit(): void {
    this.userAuthService.userData$.subscribe((el) => {
      this.initialState = el;
      console.log(this.initialState);
    });
  }
}
