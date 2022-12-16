import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsurancePoliciesModalComponent } from './insurance-policies-modal.component';

describe('InsurancePoliciesModalComponent', () => {
  let component: InsurancePoliciesModalComponent;
  let fixture: ComponentFixture<InsurancePoliciesModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsurancePoliciesModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InsurancePoliciesModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
