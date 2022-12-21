import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss'],
})
export class SideBarComponent implements OnInit {
  @Input() public steps!: any; // НАПИСАТЬ ИНТЕРФЕЙС!
  public links: string = 'id:';

  public selectedStepIndex: number = 0;

  public selectionChanged($event: any) {
    console.log($event);
    this.selectedStepIndex = $event.selectedIndex;
    this.router.navigate([this.links + this.selectedStepIndex]);
  }

  constructor(private router: Router) {}

  ngOnInit(): void {}
}
