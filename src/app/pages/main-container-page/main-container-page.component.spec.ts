import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainContainerPageComponent } from './main-container-page.component';

describe('MainContainerPageComponent', () => {
  let component: MainContainerPageComponent;
  let fixture: ComponentFixture<MainContainerPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainContainerPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainContainerPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
