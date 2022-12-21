import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

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
    this.selectedStepIndex = $event.selectedIndex;

    let route: any = this.activatedRoute.parent;
    console.log(route);

    this.router.navigate([this.links + this.selectedStepIndex], {
      relativeTo: route,
    });
  }

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {}
}
