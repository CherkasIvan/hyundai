import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router, Event } from '@angular/router';

import { filter } from 'rxjs';

@Component({
  selector: 'tes-application-form',
  templateUrl: './application-form.component.html',
  styleUrls: ['./application-form.component.scss'],
})
export class ApplicationFormComponent implements OnInit {
  //  КОСТЫЛЬ! В ДАЛЬНЕЙШЕМ ПЕРЕДЕЛАТЬ!

  public routerLink!: string;
  constructor(private _router: Router) {
    this.getRout();
  }

  public getRout() {
    this._router.events
      .pipe(
        filter(
          (event: Event): event is NavigationEnd =>
            event instanceof NavigationEnd
        )
      )
      .subscribe((el: NavigationEnd) => {
        this.routerLink = el.urlAfterRedirects;
      });
  }

  // ^ КОСТЫЛЬ! В ДАЛЬНЕЙШЕМ ПЕРЕДЕЛАТЬ!

  ngOnInit(): void {}
}
