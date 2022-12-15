import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculationLoanPageComponent } from './calculation-loan-page.component';

describe('CalculationLoanPageComponent', () => {
  let component: CalculationLoanPageComponent;
  let fixture: ComponentFixture<CalculationLoanPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalculationLoanPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalculationLoanPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
