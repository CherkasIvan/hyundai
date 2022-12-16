import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentsPaymentsPageComponent } from './documents-payments-page.component';

describe('DocumentsPaymentsPageComponent', () => {
  let component: DocumentsPaymentsPageComponent;
  let fixture: ComponentFixture<DocumentsPaymentsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocumentsPaymentsPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DocumentsPaymentsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
