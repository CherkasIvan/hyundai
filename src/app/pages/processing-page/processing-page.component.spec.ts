import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcessingPageComponent } from './processing-page.component';

describe('ProcessingPageComponent', () => {
  let component: ProcessingPageComponent;
  let fixture: ComponentFixture<ProcessingPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProcessingPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProcessingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
