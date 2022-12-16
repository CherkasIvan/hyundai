import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionnaireFormComponent } from './questionnaire-form.component';

describe('QuestionnareFormComponent', () => {
  let component: QuestionnaireFormComponent;
  let fixture: ComponentFixture<QuestionnaireFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuestionnaireFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuestionnaireFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
