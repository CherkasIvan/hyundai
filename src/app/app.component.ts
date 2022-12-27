import { Component, OnInit } from '@angular/core';

import { Actions } from '@ngrx/effects';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private actions: Actions) {}

  ngOnInit(): void {
    // this.actions.pipe(pluck('payload')).subscribe(console.log);
  }
}
