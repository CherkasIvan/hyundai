import { Component, Input, OnInit } from '@angular/core';
import { NavigationEnd, Router, Event } from '@angular/router';

import { filter } from 'rxjs';

import { StepsInterface } from '../../../pages/main-form-content/models/interfaces/steps.interface';

@Component({
  selector: 'tes-card-layout',
  templateUrl: './card-layout.component.html',
  styleUrls: ['./card-layout.component.scss'],
})
export class CardLayoutComponent implements OnInit {
  @Input() public title!: StepsInterface[];
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
        console.log(this.routerLink);
      });
  }

  ngOnInit(): void {}
}
